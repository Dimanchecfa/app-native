import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React from 'react'
import Today from '../../screens/Free/today'
import Old from '../../screens/Free/old'
import { View, Text } from 'react-native'

const  Tab = createMaterialTopTabNavigator();

const TopTab = (route) => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Today" component={Today} />
            <Tab.Screen name="Old" component={Old} />
        </Tab.Navigator>
    )
}

export default TopTab
