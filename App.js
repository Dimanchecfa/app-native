import { NativeBaseProvider, View } from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import { TailwindProvider } from "tailwindcss-react-native";
import React from "react";
import BottomTab from "./src/navigations/components/BottomTab";


const App = () => {
  return (
    

      <NativeBaseProvider>
      <NavigationContainer>
         
          <BottomTab  />
      </NavigationContainer>
    </NativeBaseProvider>
   
    
   
  );
};

export default App;
