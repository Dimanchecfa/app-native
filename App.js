import { NativeBaseProvider, View } from "native-base";
import { NavigationContainer } from "@react-navigation/native";

import React from "react";
import BottomTab from "./src/navigations/components/BottomTab";
import { routes } from "./src/navigations/routes";
import TopTab from "./src/navigations/components/TopTab";

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
