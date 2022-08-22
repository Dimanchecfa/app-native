import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import Home from "../Screens/Home";
import Details from "../Screens/Details";


const Tab = createBottomTabNavigator();

const RootStack = () => {
  return (


    <Tab.Navigator  screenOptions={({route}) => {
       
            tabBarIcon: ({focused, color, size}) => {
            let iconName;
            if (route.name === 'Home') {
                iconName ='home';
            } else if (route.name === 'Details') {
                iconName ='details';
            }
            return <Icon name={iconName} size={size} color={color} />;
            
        }
    }}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Details" component={Details} />
    </Tab.Navigator>
  );
};
export default RootStack;
