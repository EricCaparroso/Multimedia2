import React from 'react';
import { View, StyleSheet, ImageBackground, Text, Button } from 'react-native';
import { useAuth } from '../contexts/AuthContext'
import { useNavigation } from '@react-navigation/native'

const HomeScreen = () => {
  const { user, isAuthenticated, logout } = useAuth()
  const navigation = useNavigation()

  const goToLogin = () => {
    navigation.navigate('Login' as never);
  };

  const handleLogout = () => {
    logout();
    navigation.navigate('Home' as never);
  };

  return (
    <ImageBackground source={require('../assets/images/ciber.jpg')} style={styles.backgroundImage}>
      <View style={styles.container}>
        {user ? (
          <View>
            <Text style={styles.input}>Bienvenido {user.username}!</Text>
            <Button title="Logout" onPress={handleLogout} />
          </View>
        ) : (
          <Button title="Login" onPress={goToLogin} />
        )}
      </View>
    </ImageBackground>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 80,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },

  backgroundImage: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
  },
  input: {
    justifyContent: 'center',
    height: 40,
    width: '80%',
    marginBottom: 25,
    marginRight: 40,
    color: 'red',
    fontSize: 25,
    fontFamily: 'monospace',
  },
});
