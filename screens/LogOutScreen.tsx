import React, { useEffect } from 'react'
import { View, Text, StyleSheet, Button, ImageBackground } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const LogoutScreen = () => {
  const navigation = useNavigation()
  

  useEffect(() => {
    const handleLogout = async () => {
      try {
        const response = await fetch('http://172.16.102.222:8888/users/logout', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
        })

        if (response.status==200) {
          console.log('Logout exitoso')
         
          navigation.navigate('Home' as never)
        } else {
          console.error('Error en el logout:', response.status)
        }
      } catch (error) {
        console.error('Error en la solicitud de logout')
      }
    }

    handleLogout()
  }, [navigation])

  return (
    <ImageBackground source={require('../assets/images/ciber.jpg')} style={styles.backgroundImage}>
    <View style={styles.container}>
      <Text style={styles.title}>¿Seguro que quieres Salir?</Text>
      <Button title={"Logout"} onPress={()=> navigation.navigate('Home' as never)} />
    </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
})

export default LogoutScreen;
