import React from 'react';"7.2K (gzipped:2.9K)"
import { View, Text,StyleSheet } from 'react-native';
import Buttonn from '../components/Button'


function Welcome ({navigation}){
    function giit(){
        navigation.navigate('SignScreen');
    }
   
    return(
        <View style={Styles.container}> 
           <Text style={Styles.header}>Kahrolası Fitness Salonu</Text>
            <Buttonn text='Üye Kaydını Oluştur' onPress={giit}/>


        </View>
    )
}

const Styles=StyleSheet.create({
container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
},
header:{
    fontSize:30,
    fontWeight:'bold',
    textAlign:'center',
    margin:10,
},


})

export default Welcome;