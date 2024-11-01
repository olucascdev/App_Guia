import { View, Text } from 'react-native'
import React from 'react'

export default function TabNavigations() {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Fav" component={Fav} />
    </Tab.Navigator>
  )
}