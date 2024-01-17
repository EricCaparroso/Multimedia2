import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { DrawerNavigationOptions, createDrawerNavigator } from '@react-navigation/drawer';

import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';

import appColors from '../assets/styles/appColors';
import SubHeaderEric from './SubHeaderEric';
import { useAuth } from '../contexts/AuthContext';
import RegisterScreen from '../screens/RegisterScreen';
import LogoutScreen from '../screens/LogOutScreen';

const Drawer = createDrawerNavigator();


const CustomDrawer = ({user}:any) => {
  const { isAuthenticated } = useAuth();
  


  const drawerNavigatorScreenOptions: DrawerNavigationOptions = {
    // header: ({navigation}) => <CustomHeader navigation={navigation}></CustomHeader>,
    headerTitle: 'EMC',
    headerTitleAlign: 'center',
    headerStyle: {
      backgroundColor: appColors.primary
    },
    headerTintColor: appColors.white,
    drawerItemStyle: {
      width: '100%',
    },
    drawerActiveTintColor: appColors.white,
    drawerActiveBackgroundColor: appColors.primary,
    drawerInactiveTintColor: 'lightgray',
    drawerInactiveBackgroundColor: appColors.secondary,
    drawerType: 'slide'
  }
  let screens;
  if (!isAuthenticated) {
    screens = (
      <>
        <Drawer.Screen name='Home' component={HomeScreen} />
        <Drawer.Screen name='Login' component={LoginScreen} />
        <Drawer.Screen name='Register' component={RegisterScreen}/>
        
      </>
    )
  } else {
    screens = (
      <>
        <Drawer.Screen name='Home' component={HomeScreen} />
        <Drawer.Screen name='Me' component={SubHeaderEric} />
        <Drawer.Screen name='Logout' component={LogoutScreen}/>
      </>
    )
  }

  return (
    <Drawer.Navigator screenOptions={drawerNavigatorScreenOptions}>
      {screens}
    </Drawer.Navigator>
  )}

const styles = StyleSheet.create({
  headerContainer: {
  },
  headerTitle: {

  }
})

export default CustomDrawer
