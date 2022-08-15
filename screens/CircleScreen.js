import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Svg, { Circle, Rect } from 'react-native-svg';

export default class CircleScreen extends React.Component {
  render() {
    var myloop = [];
    
    for (let i = 0; i < 100; i++) {
      myloop.push(
        <View key={i}>
          <Circle cx="50" cy="50" r={Math.random() *100} stroke="blue" strokeWidth="1.5" />
        </View>
      );
    }
    return (
      <View style={[StyleSheet.absoluteFill, { alignItems: 'center', justifyContent: 'center' }]}>
        <Text >Welcome to React Native!</Text>
          <Svg height="90%" width="90%" viewBox="0 0 100 100">
          {myloop}
          </Svg>
      </View>
    );
  }
}