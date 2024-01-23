import React, { useState, useEffect } from 'react'
import { View, Button, StyleSheet, Text, ActivityIndicator, FlatList, TouchableOpacity } from 'react-native'
import { Audio } from 'expo-av'
import AsyncStorage from '@react-native-async-storage/async-storage'

const Grabadora = () => {
  const [recording, setRecording] = useState()
  const [permissionResponse, requestPermission] = Audio.usePermissions()
  const [recordings, setRecordings] = useState([])
  const [isRecording, setIsRecording] = useState(false)
  const [sound, setSound] = useState()

  useEffect(() => {
    loadRecordings()
  }, [])

  const startRecording = async () => {
    try {
      if (permissionResponse.status !== 'granted') {
        console.log('Requesting permission..')
        await requestPermission()
      }
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: true,
        playsInSilentModeIOS: true,
      })

      console.log('Starting recording..')
      const { recording } = await Audio.Recording.createAsync(Audio.RecordingOptionsPresets.HIGH_QUALITY)
      setRecording(recording)
      setIsRecording(true)
      console.log('Recording started')
    } catch (err) {
      console.error('Failed to start recording', err)
    }
  }

  const stopRecording = async () => {
    console.log('Stopping recording..')
    setRecording(undefined)
    setIsRecording(false)
    await recording.stopAndUnloadAsync()
    await Audio.setAudioModeAsync({
      allowsRecordingIOS: false,
    })
    const uri = recording.getURI()
    saveRecording(uri)
    console.log('Recording stopped and stored at', uri)
  }

  const saveRecording = async (uri) => {
    try {
      const existingRecordings = await AsyncStorage.getItem('recordings')
      const recordingsArray = existingRecordings ? JSON.parse(existingRecordings) : []
      const name = `Recording_${recordingsArray.length + 1}`
      recordingsArray.push({ uri, name })
      await AsyncStorage.setItem('recordings', JSON.stringify(recordingsArray))
      setRecordings(recordingsArray)
    } catch (error) {
      console.error('Error saving recording', error)
    }
  }

  const loadRecordings = async () => {
    try {
      const existingRecordings = await AsyncStorage.getItem('recordings')
      const recordingsArray = existingRecordings ? JSON.parse(existingRecordings) : []
      setRecordings(recordingsArray)
    } catch (error) {
      console.error('Error loading recordings', error)
    }
  }

  const playRecording = async (uri) => {
    try {
      const { sound } = await Audio.Sound.createAsync(
        { uri },
        { shouldPlay: true }
      )
      setSound(sound)
    } catch (error) {
      console.error('Error playing recording', error)
    }
  }

  const deleteRecording = async (index) => {
    try {
      const updatedRecordings = [...recordings]
      updatedRecordings.splice(index, 1)
      await AsyncStorage.setItem('recordings', JSON.stringify(updatedRecordings))
      setRecordings(updatedRecordings)
    } catch (error) {
      console.error('Error deleting recording', error)
    }
  }

  return (
    <View style={styles.container}>
      <Text>Grabadora</Text>
      <View>
        <Button title={recording ? 'Stop' : 'Start'} onPress={recording ? stopRecording : startRecording} />
        {isRecording && <ActivityIndicator style={styles.activityIndicator} size="small" color="#0000ff" />}
      </View>
      <FlatList
        data={recordings}
        keyExtractor={(item) => item.uri}
        renderItem={({ item, index }) => (
          <View style={styles.recordingItem}>
            <TouchableOpacity onPress={() => playRecording(item.uri)}>
              <Text>{item.name}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => deleteRecording(index)}>
              <Text style={styles.deleteButton}>Eliminar</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  activityIndicator: {
    marginTop: 20,
  },
  recordingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
  deleteButton: {
    color: 'red',
  },
})

export default Grabadora
