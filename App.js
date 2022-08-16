import { NativeBaseProvider } from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import RootStack from "./src/router";

import React from "react";

const App = () => {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <RootStack />
      </NavigationContainer>
    </NativeBaseProvider>
  );
};

export default App;
