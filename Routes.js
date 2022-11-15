import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Available from "./screeno/Available";
import Shift from "./screeno/Shift";
const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={headerOptions} name="Shift" component={Shift} />
        <Stack.Screen
          options={headerOptions}
          name="Available"
          component={Available}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const headerOptions = {};
