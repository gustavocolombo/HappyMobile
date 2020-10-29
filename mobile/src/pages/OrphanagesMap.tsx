import React from 'react';

import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';
import { PROVIDER_GOOGLE, Marker, Callout } from 'react-native-maps';
import  MapView from 'react-native-maps';
import { Feather } from '@expo/vector-icons';

import mapMarker from '../images/map-marker.png';
import { useNavigation } from '@react-navigation/native';

export default function OrphanagesMap(){
  
  const navigation = useNavigation();

  function handleNavigateToOrphanageDetails(){
    navigation.navigate('OrphanageDetails')
  }

  return (
    <View style={styles.container}>
      
    <MapView 
      style={styles.map} 
      provider={PROVIDER_GOOGLE}
      initialRegion={{
        latitude:-4.9783304 ,
        longitude:-39.0189615, 
        latitudeDelta:0.008,
        longitudeDelta:0.008
    }}>

      <Marker
        icon={mapMarker}
        coordinate={{
          latitude:-4.9783304 ,  
          longitude:-39.0189615, 
        }}
        calloutAnchor={{
          x: 2.7,
          y: 0.8
        }}
      >
        <Callout tooltip={true} onPress={ handleNavigateToOrphanageDetails }>
          <View style={styles.calloutContainer}>
            <Text style={styles.calloutText}> Orfanato central </Text>
          </View>
        </Callout>

      </Marker>
    </MapView>

    <View style={styles.footer}>
        <Text style={styles.footerText}> 2 orfanatos encontrados </Text>

        <TouchableOpacity style={styles.createOrphanageButton} onPress={() => {}}>
          <Feather name="plus" size={20} color="#fff"/>
        </TouchableOpacity>
    </View>

  </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,  
  },

  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },

  calloutContainer: {
    width: 160,
    height:46,
    paddingHorizontal:16,
    backgroundColor: 'rgba(255, 255, 255, 0.8)', 
    borderRadius:20,
    justifyContent: 'center',
  },

  calloutText: {
    fontFamily: 'Nunito_700Bold',
    color: '#0089a5',
    fontSize:14 
  },

  footer: {
    position:'absolute',
    left:24,
    right:24,
    bottom: 32,

    backgroundColor: '#fff',
    borderRadius: 20,
    height: 46,
    paddingLeft: 24,

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    elevation: 3
  },

  footerText:{
    fontFamily:'Nunito_700Bold',
    color: '#8fa7b3'
  },

  createOrphanageButton: {
    width:56,
    height:56,
    backgroundColor: '#15c3d6',
    borderRadius:20,
    justifyContent: 'center',
    alignItems: 'center'
  }
});