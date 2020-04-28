import {
  SET_ERROR,
  GET_PICKUP_ADDRESS,
  SET_PICKUP_LOCATION,
  SET_DESTINATION,
  SET_DIRECTIONS
} from '../constants/actionTypes';

const initialState = {
  error: null,
  pickupLocation: {},
  destination: {},
  directions: null
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_ERROR:
      return {
        ...state,
        error: action.payload
      };
    case SET_PICKUP_LOCATION:
      return {
        ...state,
        pickupLocation: {
          address: action.payload.results[0].formatted_address,
          coordinates: {
            lat: action.payload.results[0].geometry.location.lat,
            lng: action.payload.results[0].geometry.location.lng
          },
          place_id: action.payload.results[0].place_id
        }
      };
    case SET_DESTINATION:
      return {
        ...state,
        destination: {
          address: action.payload.formatted_address,
          coordinates: {
            lat: action.payload.geometry.location.lat,
            lng: action.payload.geometry.location.lng,
          },
          place_id: action.payload.place_id
        }
      };
    case SET_DIRECTIONS:
      return {
        ...state,
        directions: action.payload
      };
    default:
      return state;
  }
}

export default reducer;  