import * as React from 'react';
import { Button, View } from 'react-native';

  function rideInProgressScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button
          onPress={() => navigation.navigate('Stack2')}
          title="Stack2"
        />
        <Button onPress={() => navigation.goBack()} title="Go back" />
      </View>
    );
  }

  export default rideInProgressScreen;