import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const { Navigator, Screen } = createStackNavigator();

import OprhanageMap from './pages/OrphanagesMap';
import OrphanageDetails from './pages/OrphanageDetails';
import Home from './pages/Home';
import SelectMapPosition from './pages/CreateOrphanage/SelectMapPosition';
import OrphanageData from './pages/CreateOrphanage/OrphanageData';
import Header from './components/Header';


export default function Routes(){
  return (
    <NavigationContainer>
      <Navigator screenOptions={{headerShown: false, cardStyle:{ backgroundColor: '#f2f3f5' }}}>
        <Screen name="Home" component={ Home } /> 

        <Screen name="OrphanagesMap" component={ OprhanageMap }/>

        <Screen name="OrphanageDetails" component={ OrphanageDetails } 
          options={{
            headerShown: true, header: () => <Header showCancel={false} title="Orfanato"/>
        }}/>

        <Screen name="SelectMapPosition" component={ SelectMapPosition } 
          options={{
            headerShown: true, header: () => <Header title="Selecione no mapa"/>
        }}/>

        <Screen name="OrphanageData" component={ OrphanageData }
          options={{
            headerShown: true, header: () => <Header title="Informe os dados"/>
        }}/>
      </Navigator>
    </NavigationContainer>
  );
}