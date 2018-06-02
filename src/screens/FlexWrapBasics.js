import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native'; // Version can be specified in package.json

/*
 * flexWrap: 주축으로 아이템이 배치되어 넘치게 되는 경우 wrap을 할지 결정
 *
 * nowrap: 한 줄로 배치한다.
 * wrap: 넘치면 여러 줄로 wrap 한다
*/

export default class FlexWrapBasics extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={[styles.box, { backgroundColor: 'powderblue' }]}>
          <Text>1</Text>
        </View>
        <View style={[styles.box, { backgroundColor: 'skyblue' }]}>
          <Text>2</Text>
        </View>
        <View style={[styles.box, { backgroundColor: 'steelblue' }]}>
          <Text>3</Text>
        </View>
        <View style={[styles.box, { backgroundColor: 'blue' }]}>
          <Text>4</Text>
        </View>
        <View style={[styles.box, { backgroundColor: 'blueviolet' }]}>
          <Text>5</Text>
        </View>
        <View style={[styles.box, { backgroundColor: 'burlywood' }]}>
          <Text>6</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    // flexWrap: 'wrap',
    borderWidth: 1,
    borderColor: 'red',
  },
  box: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    height: 50,
  },
});
