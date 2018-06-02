import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native'; // Version can be specified in package.json

/*
 * flexDirection: 아이템들이 배치되는 주축을 설정한다.
 *
 * row: 왼쪽에서 오른쪽으로 배치
 * row-reverse: 오른쪽에서 왼쪽으로 배치
 * column: 위에서 아래로 배치
 * column-reverse: 아래서 위로 배치
*/

export default class FlexDirectionBasics extends Component {
  render() {
    return (
      <View style={{ flex: 1, flexDirection: 'row' }}>
        <View style={[styles.box, { backgroundColor: 'powderblue' }]}>
          <Text>1</Text>
        </View>
        <View style={[styles.box, { backgroundColor: 'skyblue' }]}>
          <Text>2</Text>
        </View>
        <View style={[styles.box, { backgroundColor: 'steelblue' }]}>
          <Text>3</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  box: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    height: 50,
  },
});
