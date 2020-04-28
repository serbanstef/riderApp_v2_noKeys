import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import OrderStack from './order_stack';
import historyScreen from '../screens/history';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Drawer = createDrawerNavigator();

function MainDrawer() {
  return (
    <Drawer.Navigator
      initialRouteName="Comanda"
      drawerStyle={{
        backgroundColor: 'black'
      }}
      drawerContentOptions={{
        activeTintColor: '#FFC107',
        inactiveTintColor: '#ECEFF1'
      }}
    >
      <Drawer.Screen
        name="Comanda"
        component={OrderStack}
        options={{
          drawerIcon: ({ color, size, focused }) => <Icon name="towing" size={size} color={color} />
        }} />
      <Drawer.Screen name="Istoric" component={historyScreen} />
    </Drawer.Navigator>
  )
}

export default MainDrawer;