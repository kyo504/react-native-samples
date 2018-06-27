import React from 'react';
import { StyleSheet, View, Animated, Text, Easing, InteractionManager } from 'react-native';

export default class TimingAnimation extends React.Component {
  constructor() {
    super();
    this.animatedValue = new Animated.Value(0);
  }

  componentDidMount() {
    InteractionManager.runAfterInteractions(() => {
      this.animate();
    });
  }

  componentWillUnmount() {
    this.animatedValue.setValue(0);
  }

  animate() {
    this.animatedValue.setValue(0);
    Animated.timing(this.animatedValue, {
      toValue: 1,
      duration: 2000,
      easing: Easing.ease,
    }).start(() => this.animate());
  }

  render() {
    const marginLeft = this.animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 300],
    });
    const opacity = this.animatedValue.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [0, 1, 0],
    });
    const movingMargin = this.animatedValue.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [0, 300, 0],
    });
    const textSize = this.animatedValue.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [18, 32, 18],
    });
    const rotateX = this.animatedValue.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: ['0deg', '180deg', '0deg'],
    });

    return (
      <View style={styles.container}>
        <Animated.View
          style={{
            marginLeft,
            height: 30,
            width: 40,
            backgroundColor: 'red',
          }}
        />
        <Animated.View
          style={{
            opacity,
            marginTop: 10,
            height: 30,
            width: 40,
            backgroundColor: 'blue',
          }}
        />
        <Animated.View
          style={{
            marginLeft: movingMargin,
            marginTop: 10,
            height: 30,
            width: 40,
            backgroundColor: 'orange',
          }}
        />
        <Animated.Text
          style={{
            fontSize: textSize,
            marginTop: 10,
            color: 'green',
          }}
        >
          Animated Text!
        </Animated.Text>
        <Animated.View
          style={{
            transform: [{ rotateX }],
            marginTop: 50,
            height: 30,
            width: 40,
            backgroundColor: 'black',
          }}
        >
          <Text style={{ color: 'white' }}>Hello from TransformX</Text>
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
});
