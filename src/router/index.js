import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import Home from "../Screens/Home";
import Detail from "../Screens/Details";
//import ionicons
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const RootStack = () => {
    
  return (
    <Tab.Navigator  screenOptions={({route}) => {
        tabBarIcon: ({focused, color, size}) => {
            let iconName;
            if(route.name === 'Home') {
                iconName = 'settings';
            }
            else if(route.name === 'Details') {
                iconName = 'settings';
            }
            return <Ionicons name={iconName} size={20} />
    }}}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Detail" component={Detail} />
    </Tab.Navigator>
    
  );
};

export default RootStack;
