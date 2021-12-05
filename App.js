import React from 'react';
import styled from 'styled-components/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import HomePage from './components/HomePage';
import CharacterDetails from './components/CharacterDetails';
import CharacterList from './components/CharacterList';
import DrawerContent from './components/DrawerContent';

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
        <Drawer.Screen name='Home' component={HomePage}></Drawer.Screen>
        <Drawer.Screen
          name='List of Ricks'
          component={CharacterList}
        ></Drawer.Screen>
        <Drawer.Screen
          name='Rick of the Week'
          component={CharacterDetails}
        ></Drawer.Screen>
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
