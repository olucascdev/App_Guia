import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../Screens/Home';
import Fav from '../Screens/Fav';
import Profile from '../Screens/Profile';
import Search from '../Screens/Search';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function TabNavigation() {
  const Tab=createBottomTabNavigator();
  return (
    <Tab.Navigator screenOptions={{
      headerShown:false
    }} >
      <Tab.Screen name="Home" component={Home} 
      options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="home" size={size} color={color} />
        ),
      }} />
      <Tab.Screen name="Fav" component={Fav}
      options={{
        tabBarLabel: 'Fav',
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="heart" size={size} color={color} />
        ),
      }} />
       
      <Tab.Screen name="Profile" component={Profile} 
      options={{
        tabBarLabel: 'Profile',
        tabBarIcon: ({ color, size }) => (
          <FontAwesome name="user-circle-o" size={size} color={color} />
        ),
      }} />
      <Tab.Screen name="Search" component={Search}
      options={{
        tabBarLabel: 'Search',
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="search" size={size} color={color} />
        ),
      }} />
    </Tab.Navigator>
  )
}