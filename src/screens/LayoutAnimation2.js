/*
 * Reference:
 * https://github.com/facebook/react-native/blob/master/Libraries/LayoutAnimation/LayoutAnimation.js
 * https://github.com/facebook/react-native/blob/90eaeb019b2056150cae541a59720daad21466ef/RNTester/js/LayoutAnimationExample.js
 */
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, LayoutAnimation } from 'react-native';

const GreenSquare = () =>
<View style={styles.greenSquare}>
  <Text>Green square</Text>
</View>;

const BlueSquare = () =>
<View style={styles.blueSquare}>
  <Text>Blue square</Text>
</View>;


export default class LayoutAnimationExample2 extends Component {
  state = {
    toggled: false,
  };

  _onPressToggle = () => {
    LayoutAnimation.easeInEaseOut();
    this.setState((state) => ({toggled: !state.toggled}));
  };

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this._onPressToggle}>
          <View style={styles.button}>
            <Text>Toggle</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.viewContainer}>
          {
            this.state.toggled ?
            <GreenSquare /> :
            <BlueSquare />
          }
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    borderRadius: 5,
    backgroundColor: '#eeeeee',
    padding: 10,
    marginBottom: 10,
  },
  buttonText: {
    fontSize: 16,
  },
  viewContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  view: {
    height: 54,
    width: 54,
    backgroundColor: 'red',
    margin: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  greenSquare: {
    width: 150,
    height: 150,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
  blueSquare: {
    width: 150,
    height: 150,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
