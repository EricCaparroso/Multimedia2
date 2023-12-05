import React from 'react';
import { View, StyleSheet } from 'react-native';


import WelcomeAuthenticatedScreen from './WelcomeAuthenticatedScreen';
import WelcomeScreen from './WelcomeScreen';
import { useAuth } from '../contexts/AuthContext';

const HomeScreen = () => {
  const { user } = useAuth();

  return (
    <View style={styles.container}>
      { user? (
        <WelcomeAuthenticatedScreen   route={{ params: { username: user.username } }} />
      ) : (
        <WelcomeScreen />
      )}
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

 
