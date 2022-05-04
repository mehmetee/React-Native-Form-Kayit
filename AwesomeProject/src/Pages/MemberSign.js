import React,{useState} from 'react';"7.2K (gzipped:2.9K)"
import { View, Text,Alert } from 'react-native';
import Buttonn from "../components/Button"
import Input from '../components/input';

function Sign (props){
    const [Username,setUserName]= useState('');
    const [UserSurname,setUserSurname]= useState('');
    const [UserAge,setUserAge]=useState('');
    const [UserMail,setUserMail]=useState('');
    function handleSubmit(){
        if( ! Username     ||
            ! UserSurname  ||
            ! UserAge      ||
            ! UserMail ){
              Alert.alert('Kahrolası Fitness Salonu','İlgili alanlar  boş geçilemez.')  
                return;
            }
        const user={
            Username,
            UserSurname,
            UserAge,
            UserMail,
        };
        props.navigation.navigate('Memberscreen',{user});
    }
    function goback(){
        props.navigation.goBack("WelconeScreen");
    }



    return (
        <View style={{flex:1,}}>
            <Input label={'Üye Adı'} placeholder='Üyenin adını giriniz...' onChangeText={setUserName}/>
            <Input label={'Üye Soyadı'} placeholder='Üyenin soyadını giriniz...'onChangeText={setUserSurname}/>
            <Input label={'Üye Yaş'} placeholder='Üyenin yaşını giriniz...' onChangeText={setUserAge}/>
            <Input label={'Üye E-posta'} placeholder='E-posta adresi giriniz...' onChangeText={setUserMail}/>
            <Buttonn text={'Kaydı Tamamla'} onPress={handleSubmit}/>
            <Buttonn text='Go Back' onPress={goback}/>
        </View>


    )
}

export default Sign;