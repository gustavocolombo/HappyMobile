import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Dimensions } from 'react-native';
import { Feather } from '@expo/vector-icons';

export default function Home(){
  
  const navigation = useNavigation();

  function handleNavigateToOrphanageMap(){
    navigation.navigate('OrphanagesMap');
  }

  return (
    <View style={styles.container}>
      
      <View style={styles.home}>
        <Image source={require('../images/logo.png')}/>
        <Text style={styles.textHome}> happy </Text>

        <Text style={styles.footerText}> Quixadá, Ceará </Text>
        
        <View style={styles.footer}>
          <TouchableOpacity style={styles.navigateToMap} onPress={handleNavigateToOrphanageMap}>
            <Feather name="arrow-right" size={20} color="#fff"/>
          </TouchableOpacity>
          
       </View>
      </View>
    </View> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  home: {
    backgroundColor: '#2AB5D1',
    justifyContent: 'center',
    alignItems: 'center',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },

  textHome: {
    fontFamily: 'Nunito_800ExtraBold',
    fontSize: 46,
    color: '#fff',
  }, 
  
  footer: {
    position:'absolute',
    right:24,
    bottom: 32,

    borderRadius: 20,
    height: 46,
    paddingRight: 24,
  },

  footerText:{
    fontFamily:'Nunito_700Bold',
    color: '#fff',
    marginTop:24,
    fontSize: 16
  },

  navigateToMap: {
    width:56,
    height:56,
    backgroundColor: '#FFD666',
    borderRadius:20,
    justifyContent: 'center',
    alignItems: 'center'
  }
})