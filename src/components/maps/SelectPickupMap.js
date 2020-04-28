import React, { useRef } from 'react';
import { View, StyleSheet, Animated } from 'react-native';
import MapView from 'react-native-maps';
import FAB from 'react-native-fab';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import { secondaryText, accentColor } from '../../styles/common';
import { askLocationPermission } from '../../util/locationPermissionAndroid';
import Geolocation from 'react-native-geolocation-service';
import { getPickupAddress } from '../../redux/actions/mainActions';
import { useDispatch } from "react-redux";

const SelectPickupMap = () => {
    const mapRef = useRef();
    const dispatch = useDispatch();
    const pinVerticalPosition = useRef(new Animated.Value(0)).current

    const animateToCurrentPosition = () =>
        Geolocation.getCurrentPosition(
            position =>
                mapRef.current.animateCamera(
                    {
                        center: {
                            latitude: position.coords.latitude,
                            longitude: position.coords.longitude,
                        },
                        altitude: 700,
                        zoom: 16.9,
                    },
                    {
                        duration: 1000,
                    },
                ),
            error => {
                alert(error.message);
            },
            {
                enableHighAccuracy: false,
                timeout: 30000,
                maximumAge: 30000,
            },
        );

    const checkPermisionsAndAnimateToCurrentPosition = () =>
        askLocationPermission().then(granted => {
            if (granted) {
                animateToCurrentPosition();
            } else {
                alert(
                    'Ne pare rau dar nu putem continua fara permisiunea de localizare',
                );
            }
        });

    const raisePin = () => Animated.timing(
        pinVerticalPosition,
        {
            toValue: -10,
            duration: 100,
            useNativeDriver: true,
        }
    ).start();

    const lowerPin = () => Animated.timing(
        pinVerticalPosition,
        {
            toValue: 0,
            duration: 50,
            useNativeDriver: true,
        }
    ).start(() => pinRaised = false);

    let pinRaised = false;

    return (
        <View style={styles.mapview}>
            <MapView
                ref={mapRef}
                style={{ flex: 1 }}
                provider={null}
                showsUserLocation={true}
                followsUserLocation={false}
                showsMyLocationButton={false}
                onMapReady={() => checkPermisionsAndAnimateToCurrentPosition()}
                onRegionChangeComplete={(region) => {
                    dispatch(getPickupAddress(region));
                    lowerPin();
                }}
                onPanDrag={() => {
                    if (!pinRaised) {
                        pinRaised = true;
                        raisePin();
                    }
                }}
            />
            <FAB
                buttonColor="white"
                iconTextColor={accentColor}
                onClickAction={animateToCurrentPosition}
                visible={true}
                iconTextComponent={<Icon name="crosshairs-gps" />}
            />
            <Animated.View style={{ ...styles.markerFixed, transform: [{ translateY: pinVerticalPosition }] }}>
                <FAIcon name='map-pin' size={50} />
            </Animated.View>
            <View style={styles.mapDrawerOverlay} />
        </View>
    );
};

export default SelectPickupMap;

const styles = StyleSheet.create({
    mapview: {
        height: '75%'
    },
    markerFixed: {
        left: '50%',
        marginLeft: -15,
        marginTop: -48,
        position: 'absolute',
        top: '50%',
        backgroundColor: 'transparent'
    },
    mapDrawerOverlay: {
        position: 'absolute',
        left: 0,
        top: 0,
        opacity: 0.0,
        height: '100%',
        width: 20,
    },
});
