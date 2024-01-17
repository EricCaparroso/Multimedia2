import CustomDrawer from '../components/CustomDrawer'
import React from 'react'
import { View, Text, Button,  StyleSheet, ImageBackground } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const WelcomeScreen = () => {
    const navigation = useNavigation()
    
    const goToLogin = () => {
      navigation.navigate('Login' as never)
    };
  
    return (
      <ImageBackground source={require('../assets/images/sharin.jpg')} style={styles.backgroundImage}>
        <View style={styles.container}>
          <Text style={styles.title}>Bienvenido a Emc</Text>
          <Button title="Login" onPress={goToLogin} />
        </View>
      </ImageBackground>
    )
  }

export default WelcomeScreen;

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
      color: "white"
    },
    loginButton: {
      
    
    },
    backgroundImage: {
        flex: 1,
        width: '100%', 
        justifyContent: 'center',
      },
  })