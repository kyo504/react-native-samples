/**
 * Sequence, parallel, delay, and stagger with different easing functions.
 */
import React from 'react';
import { StyleSheet, View, Animated, Text, Easing, Button } from 'react-native';

const easings = {
  // Predefined animations
  back: Easing.back(1),
  bounce: Easing.bounce,
  ease: Easing.ease,
  // Standard functions
  elastic: Easing.elastic(1.5),
  linear: Easing.linear,
  quad: Easing.quad,
  cubic: Easing.cubic,
  // Additional functions
  bezier: Easing.bezier(0, 0, 1, 1),
  circle: Easing.circle,
  sin: Easing.sin,
  exp: Easing.exp,
  in: Easing.in(Easing.cubic),
  inOut: Easing.inOut(Easing.cubic),
  out: Easing.out(Easing.cubic),
};

export default class CompositeAnimation extends React.Component {
  constructor() {
    super();
    this.anims = Object.keys(easings).map(() => new Animated.Value(0));
  }

  render() {
    return (
      <View>
        <Button
          title="Press to Animate"
          onPress={() => {
            Animated.parallel(
              Object.values(easings).map((easing, i) => {
                console.log(easing);
                return Animated.timing(this.anims[i], {
                  toValue: 1,
                  easing,
                  duration: 3000,
                });
              }),
            ).start();
          }}
        />
        <Button
          title="Reset animations"
          onPress={() => this.anims.forEach(anim => anim.setValue(0))}
        />
        {Object.keys(easings).map((text, ii) => (
          <Animated.View
            key={text}
            style={[
              styles.content,
              {
                left: this.anims[ii].interpolate({
//                  inputRange: [0, 0.5, 1.0],
//                  outputRange: [0, 300, 0],                  
                  inputRange: [0, 1],
                  outputRange: [0, 300],                  
                }),
              },
            ]}
          >
            <Text>{text}</Text>
          </Animated.View>
        ))}
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
    width: 100,
    backgroundColor: 'deepskyblue',
    borderWidth: 1,
    borderColor: 'dodgerblue',
    padding: 5,
    margin: 6,
    borderRadius: 10,
    alignItems: 'center',
  },
});
