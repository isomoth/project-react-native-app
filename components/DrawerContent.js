import React, { useState } from 'react';
import styled from 'styled-components/native';
import { Drawer, Title, Text, Switch } from 'react-native-paper';

import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';

const DrawerContent = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      <Drawer.Section>
        <DrawerItem
          label='Home'
          onPress={() => {
            props.navigation.navigate('Home');
          }}
        />
        <DrawerItem
          label='List of Ricks'
          onPress={() => {
            props.navigation.navigate('List of Ricks');
          }}
        />
        <DrawerItem
          label='Rick of the Week'
          onPress={() => {
            props.navigation.navigate('Rick of the Week');
          }}
        />
      </Drawer.Section>
    </DrawerContentScrollView>
  );
};

export default DrawerContent;
