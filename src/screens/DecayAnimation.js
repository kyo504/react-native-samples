import React, { Component } from 'react';
import { View, Text, StyleSheet, Animated, Button } from 'react-native';

class DecayAnimation extends Component {
  constructor() {
    super();

    this.position = new Animated.ValueXY(0, 0);
    this.twirl = new Animated.Value(0);
  }

  runAnimation() {
    Animated.sequence([
      // decay, then spring to start and twirl
      Animated.decay(this.position, {
        // coast to a stop
        velocity: { x: 0.5, y: 0.5 }, // velocity from gesture release
        deceleration: 0.997,
      }),
      Animated.parallel([
        // after decay, in parallel:
        Animated.spring(this.position, {
          toValue: { x: 0, y: 0 }, // return to start
        }),
        Animated.timing(this.twirl, {
          toValue: 360, // and twirl
        }),
      ]),
    ]).start(() => {
      this.position.setValue({ x: 0, y: 0 });
      this.twirl.setValue(0);
    }); // start the sequence group
  }

  render() {
    // getTranslateTransform(): Array<{[key: string]: AnimatedValue}> {
    //   return [{translateX: this.x}, {translateY: this.y}];
    // }
    const animatedStyle = {
      transform: [
        { translateX: this.position.x },
        { translateY: this.position.y },
        {
          rotateZ: this.twirl.interpolate({
            inputRange: [0, 360],
            outputRange: ['0deg', '360deg'],
          }),
        },
      ],
    };

    return (
      <View style={styles.container}>
        <Button title="Run animations" onPress={() => this.runAnimation()} />
        <View style={[styles.container, { alignItems: 'center', justifyContent: 'center' }]}>
          <Animated.View style={[styles.box, animatedStyle]} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  box: {
    width: 80,
    height: 80,
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default DecayAnimation;
