import { StyleSheet, View } from 'react-native';
import React from 'react';
import { NavigationContainer, Theme } from '@react-navigation/native';
import CustomDrawer from './components/CustomDrawer';
import appColors from './assets/styles/appColors';
import { AuthProvider } from './contexts/AuthContext';

export default function App() {

  const myTheme: Theme = {
    dark: false,
    colors: {
      primary: appColors.white,
      background: appColors.secondary,
      card: appColors.primary,
      text: appColors.white,
      border: 'yellow',
      notification: 'purple',
    },
  }

  return (
    <View style={styles.appContainer}>
      {/* <NavigationContainer theme={myTheme}> */}
      <NavigationContainer >
     
     
      <AuthProvider>
        <CustomDrawer></CustomDrawer>
        </AuthProvider>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
