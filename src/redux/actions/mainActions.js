import {
  SET_ERROR,
  SET_PICKUP_LOCATION,
  SET_DESTINATION,
  SET_DIRECTIONS
} from '../constants/actionTypes';
import Geocoder from 'react-native-geocoding';
import { geocoderKey, directionskey } from '../../constants/keys';
import PolylineUtil from '@mapbox/polyline';


Geocoder.init(geocoderKey, { language: "ro" });

export const setError = (error) => ({
  type: SET_ERROR,
  payload: error
})

export const getPickupAddress = (coordinates) => async (dispatch) => {
  try {
    const geoCoderData = await Geocoder.from(coordinates.latitude, coordinates.longitude);
    dispatch(setPickupLocation(geoCoderData));
  } catch (error) {
    dispatch(setError(error.message));
  };
};

export const setPickupLocation = (data) => ({
  type: SET_PICKUP_LOCATION,
  payload: data
})

export const setDestination = (data) => ({
  type: SET_DESTINATION,
  payload: data
});

export const setDirections = (data) => ({
  type: SET_DIRECTIONS,
  payload: data
});

export const getDirections = (pickupPlaceID, destinationPlaceID) => async (dispatch) => {
  try {
    const response = await fetch(`https://maps.googleapis.com/maps/api/directions/json?origin=place_id:${pickupPlaceID}&destination=place_id:${destinationPlaceID}&key=${directionskey}`);
    const json = await response.json();

    const polyline = PolylineUtil.decode(json.routes[0].overview_polyline.points).map(
      (point) => ({
        latitude: point[0],
        longitude: point[1],
      })
    );

    dispatch(setDirections(polyline))
  } catch (error) {
    dispatch(setError(error.message));
  };
}