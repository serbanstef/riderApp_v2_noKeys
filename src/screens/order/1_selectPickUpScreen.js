import React, { useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView
} from 'react-native';

import SplashScreen from 'react-native-splash-screen';
import { useSelector } from "react-redux";

import { SelectPickupMap } from '../../components/maps';
import PickupAdress from '../../components/PickupAddress';
import { SpecializedButton } from '../../components/buttons';
import { Error } from '../../components/miscellaneous';

function selectPickUpScreen({ navigation }) {
  const error = useSelector((state) => state.error);
  const state = useSelector((state) => state);

  useEffect(() => {
    SplashScreen.hide();
  }, [])

  return (
    <SafeAreaView style={styles.container}>

      <SelectPickupMap />

      <PickupAdress />


      <SpecializedButton type={'ALEGE_DESTINATIA'}/>

      {error && <Error/>}

      <View style={{ position: 'absolute', top: 1, left: '20%', width: '80%' }}>
        <Text>{JSON.stringify(state)}</Text>
      </View>
    </SafeAreaView>
  );
}

export default selectPickUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});