import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, ActivityIndicator, FlatList } from 'react-native';
import  { useState } from 'react'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from './screens/HomeScreen';
import ResultScreen from './screens/ResultScreen';

const StackNavigator = createStackNavigator({
  HomeScreen: { screen:  HomeScreen},
  ResultScreen: { screen:  ResultScreen}
}, {
  initialRouteName: "HomeScreen"
})


export default createAppContainer(StackNavigator)