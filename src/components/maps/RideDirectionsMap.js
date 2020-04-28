import React, { useRef, useEffect } from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import MapView, { Polyline } from 'react-native-maps';
import { getDirections } from '../../redux/actions/mainActions';
import { useDispatch, useSelector } from "react-redux";
import { accentColor } from '../../styles/common';

const RideDirectionsMap = () => {
    const mapRef = useRef();
    const dispatch = useDispatch();
    const [pickupLocation, destination] = useSelector((state) => [state.pickupLocation, state.destination]);
    const directions = useSelector((state) => state.directions)

    useEffect(() => {
        dispatch(getDirections(pickupLocation.place_id, destination.place_id));
    }, [])

    const fitCamera = () => mapRef.current.fitToCoordinates([
        {
            latitude: pickupLocation.coordinates.lat,
            longitude: pickupLocation.coordinates.lng,
        },
        {
            latitude: destination.coordinates.lat,
            longitude: destination.coordinates.lng,
        }
    ],
        {
            animated: false
        })

    return (
        <View style={styles.container}>
            {
                (directions)
                    ?
                    <MapView
                        style={{ flex: 1 }}
                        ref={mapRef}
                        zoomEnabled={false}
                        scrollEnabled={false}
                        onLayout={() => fitCamera()}
                    >
                        <Polyline
                            coordinates={directions}
                            strokeWidth={3}
                        />
                    </MapView>
                    :
                    <ActivityIndicator size="large" color={accentColor} />
            }
        </View>
    );
};

export default RideDirectionsMap;

const styles = StyleSheet.create({
    container: {
        height: '70%',
        // alignItems: 'center',
        // justifyContent: 'center'
    },
});
