import React, { useEffect, useRef } from 'react';
import { StyleSheet, Animated } from 'react-native';
import { useSelector } from "react-redux";
import { secondaryText } from '../styles/common';


const PickupAddress = () => {
    const address = useSelector(({ pickupLocation }) => pickupLocation.address);
    let scale = useRef(new Animated.Value(0)).current

    useEffect(() => {
        Animated.timing(
            scale,
            {
                toValue: 1,
                duration: 200,
                useNativeDriver: true
            }
        ).start(
            () => scale.setValue(0)
        );
    }, [address])

    return (

        <Animated.Text 
        style={[styles.text, {
            transform: [{
                scale: scale.interpolate({
                    inputRange: [0, 0.5, 1],
                    outputRange: [1, 1.5, 1]
                })
            }]
        }]}>
            {address}
        </Animated.Text>
    )
}

export default PickupAddress;

const styles = StyleSheet.create({
    text: {
        color: secondaryText,
        fontSize: 14,
        //fontFamily: 'Roboto'
    },
});
