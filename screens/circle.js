import React from 'react';
import { View, StyleSheet } from 'react-native';
import Svg, { Circle } from 'react-native-svg';

export default class CircleScreen extends React.Component {
  render() {
    return (
      <View style={[StyleSheet.absoluteFill, { alignItems: 'center', justifyContent: 'center' }]}>
        <Svg height="50%" width="50%" viewBox="0 0 100 100">
          <Circle cx="50" cy="50" r="45" stroke="blue" strokeWidth="1.5" fill="lightblue" />
        </Svg>
      </View>
    );
  }
}