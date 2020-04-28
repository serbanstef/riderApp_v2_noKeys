import * as React from 'react';
import { Button, View } from 'react-native';

  function rideOffersScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button
          onPress={() => navigation.navigate('rideInProgressScreen')}
          title="Stack2"
        />
        <Button onPress={() => navigation.goBack()} title="Go back" />
      </View>
    );
  }

  export default rideOffersScreen;