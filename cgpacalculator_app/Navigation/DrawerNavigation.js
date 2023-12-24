import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Semester1 from '../Screens/Semester1';
import Semester2 from '../Screens/Semester2';
import Semester3 from '../Screens/Semester3';
import Semester4 from '../Screens/Semester4';
import Semester5 from '../Screens/Semester5';
import 'react-native-gesture-handler';

const Drawer=createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator screenOptions={{drawerStyle:{backgroundColor:"#1b1c1c", width:200},
    drawerActiveTintColor:"#00ebeb",
    drawerInactiveTintColor:"grey"}}>
        <Drawer.Screen name="Semester 1" component={Semester1} options={{headerShown:false}}/>
        <Drawer.Screen name="Semester 2" component={Semester2} options={{headerShown:false}}/>
        <Drawer.Screen name="Semester 3" component={Semester3} options={{headerShown:false}}/>
        <Drawer.Screen name="Semester 4" component={Semester4} options={{headerShown:false}}/>
        <Drawer.Screen name="Semester 5" component={Semester5} options={{headerShown:false}}/>
    </Drawer.Navigator>
  )
}

export default DrawerNavigation