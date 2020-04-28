import React, { useEffect } from 'react';
import { StyleSheet, View, Alert } from 'react-native';
import { useSelector, useDispatch } from "react-redux";
import { setError } from '../../redux/actions/mainActions';

const Error = () => {
    const error = useSelector((state) => state.error);
    const dispatch = useDispatch();

    useEffect(() => {
        displayAlert();
    }, [])

    const displayAlert = () => Alert.alert(
        'Eroare',
        `${error || 'Eroare necunoscuta'}`,
        [
            { text: "OK", onPress: () => dispatch(setError(null)) }
          ],
          { cancelable: false }
    )

    return (
        <View></View>
    )
}

export default Error;