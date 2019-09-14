import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack';

import { TabNavigator } from './src/navigation/BottomTabBar'

import { LoginScreen } from './src/screens'

console.disableYellowBox = true;

export default class App extends React.Component {
  render () {
    return <AppContainor/>
  }
}

const AppNavigation = createStackNavigator({
  LoginScreen: {
    screen: LoginScreen,
    navigationOptions: {
      header: null
    }
  },
  TabNavigator: {
      screen: TabNavigator,
      navigationOptions: ({navigation}) => ({
          header: null,
      }),
  },
})

const AppContainor = createAppContainer(AppNavigation)
