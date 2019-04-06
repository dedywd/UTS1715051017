import React from "react";
import { View, Text,Button } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import Screen1 from './Penjualan.js';
import Screen2 from './About.js';
import MainScreen from './Main.js';
const AppNavigator = createStackNavigator(
 {
 Main: MainScreen,
 Layar1: Screen1,
 Layar2: Screen2,
 },
 {
 initialRouteName: "Main"
 }
);
//All source code copyrighted by Dedy Darmawan
export default createAppContainer(AppNavigator);
