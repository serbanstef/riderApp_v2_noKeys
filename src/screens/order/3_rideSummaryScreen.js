import React, { useEffect } from 'react';
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from "react-redux";

import { RideDirectionsMap } from '../../components/maps';

function rideSummaryScreen({ navigation }) {
  const state = useSelector((state) => state);

  
  return (
    <SafeAreaView style={styles.container}>

      <RideDirectionsMap />

      <View style={{ position: 'absolute', top: 1, left: '20%', width: '80%' }}>
        <Text>{JSON.stringify(state)}</Text>
      </View>
    </SafeAreaView>
  );
}

export default rideSummaryScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});