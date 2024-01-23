import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { useAuth } from "../contexts/AuthContext";
import { useNavigation } from '@react-navigation/native';
const RegisterScreen = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userCreated, setUserCreated] = useState(false);
  const { login } = useAuth();
  function newUser(username: any, email: any, password: any) {
    let user = {
      username: username,
      email: email,
      password: password,
    };
    return user;
  }

  const handleRegister = () => {
    const user = newUser(username, email, password);
  
    sendRegistrationRequest(user);
   
  };

  function sendRegistrationRequest(user: { username:string; email: string; password: string }) {
    fetch("http://172.16.100.30:8888/users/register",{
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',

      },
      body: JSON.stringify({
        name: user.username,
        email: user.email,
        password: user.password,
      })
    })
    .then(response => {
      console.log(response.status)
      return response.json();
    })
    .then(data => {
      console.log('Registration successful', data);
      navigation.navigate('Login' as never)
      login({ username: user.username });
      setUserCreated(true);
    })
    .catch(error => {
      console.error('Registration error:', error.message);
    });

    
  }




  function userRegistered(user: any){
    fetch("http://172.16.100.30:8888/users/all",{
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',

      }})
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registro de Usuario</Text>
      <TextInput
        style={styles.input}
        placeholder="Introduce tu nombre de usuario"
        placeholderTextColor="black"
        value={username}
        onChangeText={(username) => setUsername(username)}
      />
      <TextInput
        style={styles.input}
        placeholder="Introduce tu email"
        placeholderTextColor="black"
        value={email}
        onChangeText={(email) => setEmail(email)}
      />
      <TextInput
        style={styles.input}
        placeholder="Introduce tu contraseña"
        placeholderTextColor="black"
        value={password}
        onChangeText={(password) => setPassword(password)}
      />
      <Button title={"Register"} onPress={handleRegister  } />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "gainsboro", 
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    height: 40,
    width: "80%",
    marginBottom: 16,
    paddingHorizontal: 10,
   
    backgroundColor: "white",
    borderRadius: 20,
  },
});

export default RegisterScreen;
