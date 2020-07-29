import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

import Home from './pages/home'
import Points from './pages/points'
import Camera from './pages/camera'


const AppStack = createStackNavigator();

const Routes = () =>{
    return(
    <NavigationContainer>
        <AppStack.Navigator headerMode="none" screenOptions={{cardStyle:{backgroundColor: "#fff"}}}>
            <AppStack.Screen name='Home' component={Home}/>
            <AppStack.Screen name='Points' component={Points}/>
            <AppStack.Screen name='Camera' component={Camera}/>
        </AppStack.Navigator>
    </NavigationContainer>
        )
}
export default Routes


