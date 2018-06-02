import React, { Component } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

export default class TextVasic extends Component {
  onShowAlert = () => {
    alert('Click me!');
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text1}>Hello World</Text>
        <Text style={styles.text2}>Hello World</Text>
        <Text style={styles.text3} onPress={this.onShowAlert}>
          Click Me
        </Text>
        <Text style={styles.text3} onLongPress={this.onShowAlert}>
          Press and Hold
        </Text>
        <Text style={styles.text4}>
          <Text style={styles.nested1}>Nested text </Text>
          <Text style={styles.nested2}>What????</Text>
        </Text>
        <Text style={styles.truncated} numberOfLines={1} ellipsizeMode="middle">
          abcdefghijklmnopqrstuvwxyz
        </Text>
        <Text style={styles.truncated} numberOfLines={2}>
          abcdefghijklmnopqrstuvwxyz
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    backgroundColor: '#ecf0f1',
  },
  text1: {
    fontSize: 20,
  },
  text2: {
    color: 'red',
  },
  text3: {
    fontSize: 20,
  },
  text4: {
    fontSize: 20,
  },
  nested1: {
    color: 'red',
  },
  nested2: {
    color: 'blue',
  },
  truncated: {
    width: 60,
  },
});
