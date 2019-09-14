import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack';

import { TabNavigator } from './src/navigation/BottomTabBar'

import { LoginScreen, ProfileScreen, VRScreen, SettingScreen, NewsScreen, RankingScreen } from './src/screens'

console.disableYellowBox = true;

export default class App extends React.Component {
  render () {
    return <AppContainor/>
  }
}

const Home = () => {
  return (
    <View>
      <Text>router Test</Text>
    </View>
  )
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

const AppStackNavigator = createStackNavigator({
  Home: Home
})

const AppContainor = createAppContainer(AppNavigation)
