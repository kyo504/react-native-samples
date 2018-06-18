import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';

export default class Counter extends Component {
  render() {
    const { onIncrement, onDecrement, value } = this.props;

    return (
      <View style={styles.container}>
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{value}</Text>
        <View style={{ flexDirection: 'row' }}>
          <TouchableHighlight onPress={onIncrement}>
            <View style={{ width: 20, borderWidth: 1, borderColor: 'black' }}>
              <Text style={{ textAlign: 'center' }}>+</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight onPress={onDecrement}>
            <View style={{ width: 20, borderWidth: 1, borderColor: 'black' }}>
              <Text style={{ textAlign: 'center' }}>-</Text>
            </View>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
