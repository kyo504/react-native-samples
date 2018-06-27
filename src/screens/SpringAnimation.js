/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, Text, View, Animated, Image, Easing } from 'react-native';

export default class SpinningAnimation extends Component {
  constructor() {
    super();
    this.springValue = new Animated.Value(0.2);
  }

  componentWillUnmount() {
    this.springValue.setValue(0);
  }
  

  spring() {
    this.springValue.setValue(0.2);

    // friction: Controls "bounciness"/overshoot. Default 7.
    // tension: Controls speed. Default 40.
    // speed: Controls speed of the animation. Default 12.
    // bounciness: Controls bounciness. Default 8.
    // Note that you can only define bounciness/speed or tension/friction but not both

    Animated.spring(
      this.springValue,
      {
        toValue: 1,
        friction: 4,
        tension: 50,
        // speed: 5,
        // bounciness: 8,
      }
    ).start();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={{marginBottom: 100}} onPress={this.spring.bind(this)}>Spring</Text>
        <Animated.Image
          style={{
            width: 227,
            height: 200,
            transform: [{ scale: this.springValue }],
            borderWidth:1,
            borderColor:'red'
          }}
          source={{
            uri: 'https://s3.amazonaws.com/media-p.slid.es/uploads/alexanderfarennikov/images/1198519/reactjs.png'
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  }
});
