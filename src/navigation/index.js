import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainDrawer from './main_drawer'

function AppNavigator() {
  return (
    <NavigationContainer>
      <MainDrawer/>
    </NavigationContainer>
  );
}

export default AppNavigator;