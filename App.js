import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { createAppContainer, createStackNavigator } from "react-navigation";
import HomeScreen from './src/containers/Home'
import ResultScreen from './src/containers/Result'
import HeaderBack from './src/components/HeaderBack'

export default class App extends Component {
  render() {
    return (
      <AppContainer />
    );
  }
}

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
    Result: ResultScreen
  },
  {
    defaultNavigationOptions: {
      headerTitle: "Home",
      headerBackImage: <HeaderBack />
    }
  }
)

const AppContainer = createAppContainer(HomeStack)

