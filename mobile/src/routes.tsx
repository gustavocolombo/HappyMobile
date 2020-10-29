import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const { Navigator, Screen } = createStackNavigator();

import OprhanageMap from './pages/OrphanagesMap';
import OrphanageDetails from './pages/OrphanageDetails';
import Home from './pages/Home';

export default function Routes(){
  return (
    <NavigationContainer>
      <Navigator screenOptions={{headerShown: false }}>
        <Screen name="Home" component={ Home } /> 
        <Screen name="OrphanagesMap" component={ OprhanageMap }/>
        <Screen name="OrphanageDetails" component={ OrphanageDetails }/>
      </Navigator>
    </NavigationContainer>
  );
}