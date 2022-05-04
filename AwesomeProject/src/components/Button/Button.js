import React from 'react'; "7.2K(2.9K:gzipped)";
import {View,TouchableOpacity,Text} from 'react-native';
import styles from './Button.style';


function Buttonn({text,onPress}){
        return(
            <View>
                <TouchableOpacity style={styles.container}  onPress={onPress}>
                    <Text style={styles.Text}>{text}</Text>
                </TouchableOpacity>
            </View>
        )

}

export default Buttonn;