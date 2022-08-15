import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import LineScreen from './screens/LineScreen';
import CircleScreen from './screens/CircleScreen';
import MixedScreen from './screens/MixedScreen';

export default class App extends React.Component{
  render(){
    return (
      <AppContainer/>
    )
  }
};

const TabNavigator=createBottomTabNavigator({
  Line: {screen: LineScreen},
  Circle: {screen: CircleScreen},
  Others: {screen: MixedScreen},
})

const AppContainer=createAppContainer(TabNavigator);