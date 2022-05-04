import  React from 'react'; "7.2K (gzipped:2.9K)"
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator, NativeStackView} from '@react-navigation/native-stack';
import Welcome from './Pages/WelcomeScreen';
import Signn from './Pages/MemberSign';
import Memberdata from './Pages/MemberData';

const stack = createNativeStackNavigator();

function App( navigate){
    return(
        <NavigationContainer>
            <stack.Navigator screenOptions={{headerShown:false}}>
                <stack.Screen  name='WelcomeScreen' component={Welcome} />
                <stack.Screen  name='SignScreen' component={Signn}/>
                <stack.Screen name='Memberscreen' component={Memberdata} />
            </stack.Navigator>
        </NavigationContainer>
    )
}

export default App;