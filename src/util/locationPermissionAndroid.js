import { Platform, PermissionsAndroid } from 'react-native';

export const askLocationPermission = async () => {

    if (Platform.OS === 'android') {

        try {
    
            let location_permision = await PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION);
            //alert(location_permision)
            if (location_permision === false) {
    
                location_permision = await PermissionsAndroid.request(
                    PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                    {
                    title: "Permisiuni localizare",
                    message:
                        'Avem nevoie de permisiunea ta ' +
                        'pentru a te putea localiza',
                    buttonNeutral: "Ask Me Later",
                    buttonNegative: "Cancel",
                    buttonPositive: "OK"
                    }
                );

                  if (location_permision === PermissionsAndroid.RESULTS.GRANTED) {
                    return true
                  } else {
                    return false
                  }
    
            };

            return true;
    
        } catch (err) {
          alert('A aparut o eroare de localizare')
        }
    } 

    return true;
  };