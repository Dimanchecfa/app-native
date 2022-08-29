import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Home from "../../screens/Home";
import Profile from "../../screens/Profile";
import Free from "../../screens/Free/index";
import { View, Text } from "react-native";
import Premium from "../../screens/Premium";
import { useNavigation } from "@react-navigation/native";
import ProfileDetail from "../../screens/Profile/ProfileDetail";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TouchableRipple } from "react-native-paper";


const Tab = createBottomTabNavigator();
const ProfileStack = createNativeStackNavigator();

const BottomTab = ( {navigation}) => {
  return (
    <Tab.Navigator
      initialRouteName="Profile"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Profile") {
            iconName = focused ? "account" : "account-outline";
          } else if (route.name === "Free") {
            iconName = focused ? "ticket" : "ticket-outline";
          } else if (route.name === "Premium") {
            iconName = focused ? "ticket-account" : "ticket-account";
          }

          return (
            <MaterialCommunityIcons name={iconName} size={size} color={color} />
          );
        },
      })}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          title: "Home",
          headerTitleAlign: "center",
        }}
      />

      <Tab.Screen
        name="Free"
        component={Free}
        options={{
          title: "Free",
          headerTitleAlign: "center",
        }}
      />
      <Tab.Screen
        name="Premium"
        component={Premium}
        options={{
          title: "Premuim",
          headerTitleAlign: "center",
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileStackScreen}
        options={{
          headerShown: false,
        }}

          
           
      />
    </Tab.Navigator>
  );
};

export default BottomTab;


const ProfileStackScreen = ({navigation}) => {
  return (
    <ProfileStack.Navigator
    initialRouteName="Profile"
    >
      <ProfileStack.Screen
        name="Profile"
        component={Profile}
        options={{ 
          title: "Profile",
          headerTitleAlign: "center",
          headerRight: () => (
            <View style={{ flexDirection: "row" }}>
              <MaterialCommunityIcons.Button  
                name="account-edit"
                size={24}
                color="#000"
                backgroundColor="#fff"
                onPress={() => navigation.navigate("Detail")}
              />
              </View>
            ),
        }}
       
      />
      <ProfileStack.Screen

        name="Detail"
        component={ProfileDetail}
        options={{
          title: "Detail",
          headerTitleAlign: "center",
        }}
      />
   

    </ProfileStack.Navigator>
  );
}


