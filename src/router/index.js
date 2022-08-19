import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import Home from "../Screens/Home";
import Detail from "../Screens/Details";
import fontAwesome from 'react-native-vector-icons/FontAwesome';
import Icon from "react-native-ionicons";

const Tab = createBottomTabNavigator();

const RootStack = () => {
    
  return (
    <Tab.Navigator  screenOptions={({route}) => {
        tabBarIcon: ({focused, color, size}) => {
            let iconName;
            if(route.name === 'Home') {
                iconName =  'home';
            }
            else if(route.name === 'Details') {
                iconName = 'settings';
            }
            return <Icon  name={iconName} size={size} color={color} />;
    }}}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Detail" component={Detail} />
        <Tab.Screen name="Settings" component={Detail} />
        
    </Tab.Navigator>
    
  );
};

export default RootStack;
