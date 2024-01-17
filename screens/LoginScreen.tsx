import React, { useState } from 'react'
import { Button, ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useAuth } from '../contexts/AuthContext'

const LoginScreen = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const { login } = useAuth()
  const navigation = useNavigation()
const handleLogin = (user: { username:string;password: string}) => {
  fetch(`http://172.16.102.222:8888/users/login`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: user.username,
      password: user.password,
    }),
  })
    .then(response => {
      if (response.status==400) {
        throw new Error('No se envio cuerpo en la peticion')
      }
      return response.json()
    })
    .then(data => {if (data.username==""){
      console.log("Error")
    }2

      login({ username: data.username });
      console.log('Inicio de sesión exitoso:', data.username)
      navigation.navigate('Home' as never)
    })
    .catch(error => {
      console.error('Error al iniciar sesión:', error.message)
      alert('Credenciales incorrectas. Verifica tus datos e inténtalo nuevamente.')
    });
};

  return (
    <ImageBackground source={require('../assets/images/madara.jpg')} style={styles.backgroundImage}>
      <View style={styles.container}>
        <Text style={styles.title}>Inicio de Sesión</Text>
        <TextInput
          style={styles.input}
          placeholder="Introduce tu nombre de usuario"
          placeholderTextColor="white"
          value={username}
          onChangeText={(text) => setUsername(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Introduce tu contraseña"
          placeholderTextColor="white"
          secureTextEntry
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
       <Button title={"Login"} onPress={() => handleLogin({ username, password })} />
         
        
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'white',
  },
  input: {
    height: 40,
    width: '80%',
    marginBottom: 16,
    paddingHorizontal: 10,
    color: 'white',
  },
  loginButton: {
    backgroundColor: '#3498db',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  loginButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
  },
})

export default LoginScreen
