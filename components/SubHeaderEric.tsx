import { StyleSheet, Text, View, Image, ScrollView, ImageBackground } from 'react-native'
import React from 'react'

const SubHeaderEric = () => {
  return (
    <ImageBackground source={require('../assets/images/nube.gif') } style={styles.backgroundImage}>

    <View style={{ flexDirection: 'column', alignItems: 'center',}}>
            <Image style={styles.avatar} source={require('../assets/images/eric.jpeg')}></Image>
            <View style={{ padding: 10, borderRadius: 10, width: '70%' }}>
                <Text>
                   Eric Marrero Caparroso
                </Text>
                <Text style={{ color: 'black', fontWeight: "900", textTransform: 'capitalize', fontSize: 17, textAlign: 'center' }}>
            cosas que me gustan mucho:
          </Text>
          <ScrollView style={{ padding: 10 }}>
            <Text style={styles.cosasQmeGustanMuxoEstails}>Comer</Text>
            <Text style={styles.cosasQmeGustanMuxoEstails}>Baloncesto</Text>
            <Text style={styles.cosasQmeGustanMuxoEstails}>Botanica</Text>
            <Text style={styles.cosasQmeGustanMuxoEstails}>Ver anime</Text>
            <Text style={styles.cosasQmeGustanMuxoEstails}>Leer</Text>
            <Text style={styles.cosasQmeGustanMuxoEstails}>motocros</Text>
            <Text style={styles.cosasQmeGustanMuxoEstails}>Viajar</Text>
            <Text style={styles.cosasQmeGustanMuxoEstails}>Hacer musica</Text>
          </ScrollView>
            </View>
        </View>
    </ImageBackground>
  )
}

export default SubHeaderEric

const styles = StyleSheet.create({
    avatar: { 
        height: 90,
        width: 90,
        borderRadius: 100,
        marginTop:10,
    },
    cosasQmeGustanMuxoEstails: {
        padding: 10,
        color: 'black',
        textAlign: 'center',
        fontWeight: 'bold',
        fontStyle: 'italic',
        fontSize: 15,
        backgroundColor: 'white'
      },
      backgroundImage: {
        flex: 1,
        width: '100%', 
        justifyContent: 'center',
      },
})