import React from 'react';
import { useNavigation } from '@react-navigation/native';
import BasicButton from './BasicButton';

const SpecializedButton = (props) => {
    const navigation = useNavigation();
    const { type, onPress, disabled } = props;


    switch (type) {
        case 'ALEGE_DESTINATIA':
            return (
            <BasicButton 
            title={'ALEGE DESTINATIA'} 
            iconName={'directions'}
            onPress={() => navigation.navigate('selectDestinationScreen')}
            disabled={false}
            />)
            break;
        case 'COMANDA':
            return
            break;
        case 'ACCEPTA':
            return
            break;
        case 'REFUZA':
            return
            break;
        default:
            break;
    }


}

export default SpecializedButton;

