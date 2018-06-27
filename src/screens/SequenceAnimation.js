import React from 'react';
import { StyleSheet, Text, View, Animated, ScrollView, InteractionManager } from 'react-native';

const arr = Array.from(new Array(100), () => 0).map((value, index) => index);

export default class SequenceAnimation extends React.Component {
  constructor() {
    super();
    this.animatedValue = [];
    arr.forEach(value => (this.animatedValue[value] = new Animated.Value(0)));
  }

  componentDidMount() {
    InteractionManager.runAfterInteractions(() => {
      this.animate();
    });
  }

  animate() {
    const animations = arr.map(item => {
      return Animated.timing(this.animatedValue[item], {
        toValue: 1,
        duration: 50,
      });
    });
    Animated.sequence(animations).start();
  }

  render() {
    const animations = arr.map((a, i) => {
      return (
        <Animated.View
          key={i}
          style={{
            opacity: this.animatedValue[a],
            height: 20,
            width: 20,
            backgroundColor: 'red',
            marginLeft: 3,
            marginTop: 3,
          }}
        />
      );
    });

    return (
      <ScrollView contentContainerStyle={styles.container}>
        {animations}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});
