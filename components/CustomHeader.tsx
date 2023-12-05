import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import appColors from '../assets/styles/appColors';
import Ionicons from '@expo/vector-icons/Ionicons';
import { ParamListBase } from '@react-navigation/routers/src/types';
import { DrawerNavigationProp } from '@react-navigation/drawer';

type CustomHeaderProps = {
  navigation: DrawerNavigationProp<ParamListBase>
}

const CustomHeader = ({navigation}: CustomHeaderProps) => {

  const openDrawer = () => navigation.openDrawer();

    return(
      <View style={styles.headerContainer}>
        <Ionicons
          name={'menu-outline'}
          size={32}
          color={'white'}
          onPress={openDrawer}
        />
        <Text style={styles.textTile}>
          EMC
        </Text>
      </View>
    )
}

export default CustomHeader

const styles = StyleSheet.create({
  headerContainer: {
    marginTop: 45,
    backgroundColor: appColors.primary,
    width: '100%',
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: 'black',
    borderStyle: 'solid',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },
  textTile: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffff',
    textAlign: 'center',
    textAlignVertical: 'center',
  }
})