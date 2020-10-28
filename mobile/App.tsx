import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { PROVIDER_GOOGLE, Marker, Callout } from 'react-native-maps';
import  MapView from 'react-native-maps';

import mapMarker from './src/images/map-marker.png';

export default function App() {
  return (
    <View style={styles.container}>
      
      <MapView style={styles.map} 
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
          <Callout tooltip={true}>
            <View style={styles.calloutContainer}>
              <Text style={styles.calloutText}> Orfanato central </Text>
            </View>
          </Callout>

        </Marker>
        
      </MapView>

    </View>
  );
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
    justifyContent: 'center'
  },

  calloutText: {
    color: '#0089a5',
    fontSize:14 
  }
});
