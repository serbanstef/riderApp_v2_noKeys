import React from 'react';
import {
    View,
    TouchableOpacity,
    TouchableNativeFeedback,
    Platform,
    Text,
    StyleSheet
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import * as commonStyle from '../../styles/common';


const BasicButton = (props) => {

    const { title, iconName, disabled, onPress } = props;
    const color = (disabled) ? commonStyle.lightPrimaryColor : commonStyle.accentColor;

    if (Platform.OS === 'android') {
        return (
            <TouchableNativeFeedback
                onPress={onPress}
                disabled={disabled}
            >
                <View style={[styles.button, { borderColor: color }]}>
                    <Icon name={iconName} style={{ color: color, fontSize: 20 }} />
                    <Text style={{ color: color, fontSize: 14, fontWeight: 'bold', left: 3 }}>{title}</Text>
                </View>
            </TouchableNativeFeedback>)
    } else {
        return (
            <TouchableOpacity
                onPress={onPress}
                disabled={disabled}
                style={[styles.button, { borderColor: color }]}
            >
                <Icon name={iconName} style={{ color: color, fontSize: 20 }} />
                <Text style={{ color: color, fontSize: 14, fontWeight: 'bold', left: 3 }}>{title}</Text>
            </TouchableOpacity>
        )
    }

}

export default BasicButton;

const styles = StyleSheet.create({
    button: {
        borderWidth: 1,
        width: '90%',
        height: 50,
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center'
    }
})


