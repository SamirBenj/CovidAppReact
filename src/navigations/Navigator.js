import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';


const Stack = createNativeStackNavigator();

// const screenOptionStyle = {
//     headerShown = false
// }

export default class HomeStackNavigator extends React.Component {
    
    render(){
    return (
        <Stack.Navigator>
            <Stack.Screen
                name= "Home"
                component={Home}
                // options={{ title: 'Home' }}
                />
          
        </Stack.Navigator>
    )
    }
}

// export default HomeStackNavigator;