import React from 'react'; '7.2K(gzipped:2.9K';
import {View,Text,StyleSheet} from 'react-native';
import Butonn from '../components/Button'


function Data({route,navigation}){
    const {user}=route.params;
    function goback(){
            navigation.goBack("SingScreen");
    }

    return(
        <View>
            <Text style={styles.mesagge}>ÜYE KAYDI BAŞARILI...</Text>
            <Text style={styles.label}>Üye Adı :{user.Username}</Text>
            <Text style={styles.label}>Üye Soyadı :{user. UserSurname}</Text>
            <Text style={styles.label}>Üye Yaşı :{user.UserAge}</Text>
            <Text style={styles.label}>Üye E-posta :{user.UserMail}</Text>




            <Butonn text='Go Back' onPress={goback}/>
        </View>
    )
}
const styles=StyleSheet.create({
        label:{fontSize:20,
            fontWeight:'bold',
        margin:10,},
        mesagge:{
            fontSize:30,
            fontWeight:'bold',
            textAlign:'center',
            color:'green'
        }
})
export default Data;