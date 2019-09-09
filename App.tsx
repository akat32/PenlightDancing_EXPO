import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


import { AppNavigation } from './src/navigation/AppNavigator'

export default class App extends React.Component {
  render () {
    return (
      <AppNavigation/>
    )
  }
}

//Unable to resolve "react-native-gesture-handler" from "node_modules/react-navigation-stack/lib/module/views/StackView/StackViewLayout.js"
// Failed building JavaScript bundle.