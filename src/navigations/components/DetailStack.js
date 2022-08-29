import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import ProfileDetail from "../../screens/Profile/ProfileDetail";
const Stack = createNativeStackNavigator();

const DetailStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Detail"
        component={ProfileDetail}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default DetailStack;
