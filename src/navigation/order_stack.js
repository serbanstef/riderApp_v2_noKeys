import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { selectPickUpScreen, selectDestinationScreen, rideSummaryScreen, rideOffersScreen, rideInProgressScreen } from '../screens/order'

const Stack = createStackNavigator();

  function OrderStack() {
      return (
        <Stack.Navigator 
        initialRouteName="selectPickUpScreen"
        screenOptions={{headerShown: false}}
        >
          <Stack.Screen name="selectPickUpScreen" component={selectPickUpScreen} />
          <Stack.Screen name="selectDestinationScreen" component={selectDestinationScreen} />
          <Stack.Screen name="rideSummaryScreen" component={rideSummaryScreen} />
          <Stack.Screen name="rideOffersScreen" component={rideOffersScreen} />
          <Stack.Screen name="rideInProgressScreen" component={rideInProgressScreen} />
        </Stack.Navigator>
      )
  }
  
  export default OrderStack;