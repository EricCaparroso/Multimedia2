import React from 'react';
import { View, Text,StyleSheet, ImageBackground } from 'react-native';
import SubHeaderEric from '../components/SubHeaderEric';

const WelcomeAuthenticatedScreen = ({ route }: any) => {
  const { username } = route.params || {};

  return (
    <ImageBackground source={require('../assets/images/ciber.jpg')} style={styles.backgroundImage}>
    <View style={styles.container} >
      <Text style={styles.input}>Bienvenido, {username}!</Text>
     
     
    </View>
    </ImageBackground>
  );
};

export default WelcomeAuthenticatedScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:80,
    justifyContent: "flex-start",
    alignItems: 'center',
  },

  backgroundImage: {
    flex: 1,
    width: '100%', 
    justifyContent: 'center',
  },
  input: {
    justifyContent:"center",
    height: 40,
    width: '80%',
    marginBottom: 45, marginRight :40,
    color: 'red',  // Color del texto rojo
    fontSize: 25,
    fontFamily: 'monospace', 
    
    
    // Tamaño del texto como un título
      // Peso de la fuente como un título
    
  }
  
})