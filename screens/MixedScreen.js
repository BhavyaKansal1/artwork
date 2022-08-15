import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Svg, { Circle, Rect } from 'react-native-svg';

export default class MixedScreen extends React.Component {
  render() {
    var myloop = [];
    //randColor = ["red","green","blue","black","purple","lightblue","yellow"];
    //colorIndex = Math.floor(Math.random()*6);
    for (let i = 0; i < 100; i++) {
      myloop.push(
        <View key={i}>
          <Rect x={Math.random() *100} y={Math.random() *100} width={Math.random() *100} height={Math.random() *100} stroke="green"/>
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