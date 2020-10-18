import React from "react";
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from "../screens/HomeScreen";
import FullViewScreen from "../screens/FullViewScreen";

const Stack = createStackNavigator();

function MainNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="FullView" component={FullViewScreen} />
        </Stack.Navigator>
    );
}

export default MainNavigator;