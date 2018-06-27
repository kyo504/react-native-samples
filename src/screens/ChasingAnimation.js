import React, { Component } from 'react';
import { View, Text, StyleSheet, Animated, PanResponder } from 'react-native';

export default class ChasingAnimation extends Component {
  constructor() {
    super();

    this.leader = new Animated.ValueXY(0, 0);
    this.follower = new Animated.ValueXY(0, 0);
    this.opacity = new Animated.Value(0);
  }

  componentWillMount() {
    this._value = { x: 0, y: 0 };
    this.leader.addListener(v => (this._value = v));
    // this.follower.addListener(v => console.log(v));
    this.panResponder = PanResponder.create({
      onStartShouldSetPanResponder: (evt, gestureState) => true,
      onMoveShouldSetPanResponder: (evt, gestureState) => true,
      onPanResponderGrant: (e, gestureState) => {
        this.leader.setOffset({
          x: this._value.x,
          y: this._value.y,
        });
        this.leader.setValue({ x: 0, y: 0 });
        Animated.spring(this.follower, { toValue: this.leader }).start();        
        Animated.timing(this.opacity, {
          toValue: this.leader.x.interpolate({
            inputRange: [0, 300],
            outputRange: [1, 0],
          }),
        }).start();
      },
      onPanResponderMove: Animated.event([null, { dx: this.leader.x, dy: this.leader.y }]),
      onPanResponderRelease: (e, gestureState) => {
        this.leader.flattenOffset();
        // Animated.decay(this.leader, {
        //   // coast to a stop
        //   velocity: { x: gestureState.vx, y: gestureState.vy }, // velocity from gesture release
        //   deceleration: 0.997,
        // }).start();      
      },
    });
  }

  render() {
    // getTranslateTransform(): Array<{[key: string]: AnimatedValue}> {
    //   return [{translateX: this.x}, {translateY: this.y}];
    // }
    const leader = {
      transform: this.leader.getTranslateTransform(),
    };

    const follower = {
      transform: this.follower.getTranslateTransform(),
    };

    return (
      <View style={styles.container}>
        <Animated.View style={[styles.box, leader]} {...this.panResponder.panHandlers}>
          <Text>Leader</Text>
        </Animated.View>
        <Animated.View style={[styles.box, follower, { opacity: this.opacity }]}>
          <Text>follower</Text>
        </Animated.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 80,
    height: 80,
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
