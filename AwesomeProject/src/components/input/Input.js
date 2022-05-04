import React from 'react'; "7.2K(gzipped:2.9K";
import {View,Text,TextInput} from 'react-native';
import styles from './Input.styles';

function Input({label,placeholder,onChangeText}){
    return(
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <View style={styles.input_container}>
                <TextInput placeholder={placeholder} onChangeText={onChangeText} />
            </View>
        </View>
    )
}

export default Input;