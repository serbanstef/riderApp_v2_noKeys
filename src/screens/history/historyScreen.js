import * as React from 'react';
import { Button, View } from 'react-native';

  function historyScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button onPress={() => navigation.goBack()} title="Go back" />
      </View>
    );
  }

  export default historyScreen;