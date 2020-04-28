import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';

const BackButton = (props) => {
    const navigation = useNavigation();

    const handleOnPress = () => props.onPress || navigation.goBack();

    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={() => handleOnPress()}
            >
                <Icon
                    name={'arrow-left'}
                    style={{
                        color: 'black',
                        fontSize: 25
                    }} />
            </TouchableOpacity>
        </View>
    )
};

export default BackButton;

const styles = StyleSheet.create({
    container: {
        left: 5,
        width: 30,
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    }
})
