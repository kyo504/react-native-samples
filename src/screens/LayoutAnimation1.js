/*
 * Reference:
 * https://github.com/facebook/react-native/blob/master/Libraries/LayoutAnimation/LayoutAnimation.js
 * https://github.com/facebook/react-native/blob/90eaeb019b2056150cae541a59720daad21466ef/RNTester/js/LayoutAnimationExample.js
 */
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, LayoutAnimation } from 'react-native';

export default class LayoutAnimationExample1 extends Component {
  state = {
    views: [],
  };

  componentWillUpdate() {
    // LayoutAnimation.easeInEaseOut();
    // LayoutAnimation.linear();
    LayoutAnimation.spring();
  }

  _onPressAddView = () => {
    this.setState((state) => ({views: [...state.views, {}]}));
  };

  _onPressRemoveView = () => {
    this.setState((state) => ({views: state.views.slice(0, -1)}));
  };

  render() {
    const views = this.state.views.map((view, i) =>
      <View key={i} style={styles.view}>
        <Text>{i}</Text>
      </View>
    );
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this._onPressAddView}>
          <View style={styles.button}>
            <Text>Add view</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={this._onPressRemoveView}>
          <View style={styles.button}>
            <Text>Remove view</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.viewContainer}>
          {views}
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
});

