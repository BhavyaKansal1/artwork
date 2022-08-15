import React from "react";
import {View, StyleSheet, Text, Buttons} from 'react';

import Svg , {Line} from 'react-native-svg';

export default class TriangleScreen extends React.Component {
    render(){
      return(
        <View style = {[StyleSheet.absoluteFill, {alignItems: 'center', justifyContent: 'center'}]}>
            <Svg height = "100" width = "100">  
                <Line x1 = "0" y1 = "0" x2 = "100" y2 = "100" stroke = "red" strokeWidth = "2"/>
            </Svg>
        </View>
      )
    }
  }