import React, { Component } from 'react';
import { View, Text, StyleSheet, Animated, PanResponder } from 'react-native';

class InnerView extends Component {

  constructor(props) {
    super(props);

    this.animatedValue = new Animated.ValueXY(0, 0);
    this._value = { x: 0, y: 0 };
    this.animatedValue.addListener(v => {
      this._value = v;
      console.log(this._value);
    })
  }  
  
  componentWillMount() {
    this._panResponder = PanResponder.create({
      // Ask to be the responder:
      onStartShouldSetPanResponder: (evt, gestureState) => true,
      onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
      onMoveShouldSetPanResponder: (evt, gestureState) => true,
      onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,

      onPanResponderGrant: (evt, gestureState) => {
        // The gesture has started. Show visual feedback so the user knows
        // what is happening!
        this.animatedValue.setOffset({
          x: this._value.x,
          y: this._value.y,
        });
        this.animatedValue.setValue({ x:0, y:0 });
      },
      onPanResponderMove: Animated.event([
        null,
        {
          dx: this.animatedValue.x,
          dy: this.animatedValue.y,
        },
      ]),
      onPanResponderRelease: (evt, gestureState) => {
        // The user has released all touches while this view is the
        // responder. This typically means a gesture has succeeded
        console.log( 'vx: ' + gestureState.vx + ', vy: ' + gestureState.vy);
        this.animatedValue.flattenOffset();        
      },
      onPanResponderTerminationRequest: (evt, gestureState) => {
        // Something else wants to become responder.
        // Should this view release the responder? Returning true allows release
        // console.log("Child's onPanResponderTerminationRequest is called");
        return false;
      },
      onPanResponderTerminate: (evt, gestureState) => {
        // Another component has become the responder, so this gesture
        // should be cancelled
        // console.log("Child's onPanResponderTerminate is called");
        return true;
      },
      onShouldBlockNativeResponder: (evt, gestureState) => {
        // Returns whether this component should block native components from becoming the JS
        // responder. Returns true by default. Is currently only supported on android.
        return true;
      },
    });
  }

  render() {
    const animatedStyle = {
      transform: this.animatedValue.getTranslateTransform(),
    };

    return (
      <Animated.View style={[{ width: 50, height: 50, backgroundColor: 'red' }, animatedStyle]} {...this._panResponder.panHandlers} />
    );
  }
}

export default class PanResponderExample extends Component {
  constructor(props) {
    super(props);

    this.animatedValue = new Animated.ValueXY(0, 0);
    this._value = { x: 0, y: 0 };
    this.animatedValue.addListener(v => this._value = v);
  }
  componentWillMount() {
    this.panResponder = PanResponder.create({
      // Ask to be the responder:
      onStartShouldSetPanResponder: (e, gestureState) => true,
      onStartShouldSetResponderCapture: (e, gestureState) => {},
      onMoveShouldSetPanResponder: (e, gestureState) => true,
      onMoveShouldSetResponderCapture: (e, gestureState) => {},

      // The gesture has started. Show visual feedback so the user knows what is happening!
      onPanResponderGrant: (e, gestureState) => {
        this.animatedValue.setOffset({
          x: this._value.x,
          y: this._value.y,
        });
        this.animatedValue.setValue({ x:0, y:0 });
      },
      // The user is moving their finger
      onPanResponderMove: Animated.event([
        null,
        { dx: this.animatedValue.x, dy: this.animatedValue.y },
      ]),
      // Fired at the end of the touch, ie "touchUp"
      onPanResponderRelease: (e, gestureState) => {
        console.log( 'vx: ' + gestureState.vx + ', vy: ' + gestureState.vy);
        this.animatedValue.flattenOffset();
      },
      onPanResponderTerminate:  (e, gestureState) => {
        console.log("Parent's onPanResponderTerminate is called");
        return true;
      },
      onPanResponderTerminationRequest: (e, gestureState) => {
        console.log("Parent's onPanResponderTerminationRequest is called");
        return true;
      },
      onShouldBlockNativeResponder: (e, gestureState) => {
        // Returns whether this component should block native components from becoming the JS
        // responder. Returns true by default. Is currently only supported on android.
        return true;        
      }
    });
  }

  render() {
    // getTranslateTransform(): Array<{[key: string]: AnimatedValue}> {
    //   return [{translateX: this.x}, {translateY: this.y}];
    // }
    const animatedStyle = {
      transform: this.animatedValue.getTranslateTransform(),
    };

    return (
      <View style={styles.container}>
        <Animated.View style={[styles.box, animatedStyle]} {...this.panResponder.panHandlers}>
          <InnerView />
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
    width: 300,
    height: 300,
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
