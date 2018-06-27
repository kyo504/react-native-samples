/**
 * One `Animated.Value` is driven by a spring with custom constants and mapped to an
 * ordered set of transforms.  Each transform has an interpolation to convert the value
 * into the right range and units.
 */
import React from 'react';
import { StyleSheet, View, Animated, Text, Easing, Button } from 'react-native';

export default class BounceAnmation extends React.Component {
  constructor() {
    super();
    this.anim = new Animated.Value(0);
    this.anim.addListener((e) => {
      console.log(e);
    })
  }

  componentWillUnmount() {
    this.anim.setValue(0);
  }

  render() {
    return (
      <View>
        <Button
          title="Press to Fling it!"
          onPress={() => {
            Animated.spring(this.anim, {
              toValue: 0, // Returns to the start
              velocity: 3, // Velocity makes it move
              tension: -10, // Slow
              friction: 1, // Oscillate a lot
            }).start();
          }}
        />
        <Animated.View
          style={[
            styles.content,
            {
              transform: [
                // Array order matters
                {
                  scale: this.anim.interpolate({
                    inputRange: [0, 1],
                    outputRange: [1, 4],
                  }),
                },
                {
                  translateX: this.anim.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, 500],
                  }),
                },
                {
                  rotate: this.anim.interpolate({
                    inputRange: [0, 1],
                    outputRange: [
                      '0deg',
                      '360deg', // 'deg' or 'rad'
                    ],
                  }),
                },
              ],
            },
          ]}
        >
          <Text>Transforms!</Text>
        </Animated.View>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 60,
  },
  content: {
    backgroundColor: 'deepskyblue',
    borderWidth: 1,
    borderColor: 'dodgerblue',
    padding: 20,
    margin: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
});
