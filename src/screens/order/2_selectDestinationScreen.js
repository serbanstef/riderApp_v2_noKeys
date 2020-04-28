import * as React from 'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { BackButton } from '../../components/navigation';
import { useDispatch } from "react-redux";
import { setDestination } from '../../redux/actions/mainActions';


const selectDestinationScreen = ({ navigation }) => {
    const dispatch = useDispatch();

    const handleOnSelectDestination = (details) => {
        dispatch(setDestination(details));
        navigation.navigate('rideSummaryScreen')
    };

    return (
        <GooglePlacesAutocomplete
            placeholder='Search'
            minLength={2} // minimum length of text to search
            autoFocus={true}
            returnKeyType={'search'} // Can be left out for default return key https://facebook.github.io/react-native/docs/textinput.html#returnkeytype
            keyboardAppearance={'light'} // Can be left out for default keyboardAppearance https://facebook.github.io/react-native/docs/textinput.html#keyboardappearance
            listViewDisplayed='auto'    // true/false/undefined
            fetchDetails={true}
            renderDescription={row => row.description} // custom description render
            onPress={(data, details = null) => handleOnSelectDestination(details)}

            getDefaultValue={() => ''}

            query={{
                // available options: https://developers.google.com/places/web-service/autocomplete
                key: 'AIzaSyDmAMSN-qBfTD3Ncg2gyCp1t0ZomVQa6KQ',
                language: 'ro',
                components: 'country:ro'
            }}

            styles={{
                textInputContainer: {
                    width: '100%'
                },
                description: {
                    fontWeight: 'bold'
                },
                predefinedPlacesDescription: {
                    color: '#1faadb'
                }
            }}

            debounce={200} // debounce the requests in ms. Set to 0 to remove debounce. By default 0ms.
            renderLeftButton={() => <BackButton />}
        //renderRightButton={() => <Text>Custom text after the input</Text>}
        />
    );
}

export default selectDestinationScreen;