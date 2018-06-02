import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native'; // Version can be specified in package.json

/*
 * flex: 주축으로 아이템이 배치되어 넘치게 되는 경우 wrap을 할지 결정
 * - CSS와 동일한 방법으로 동작하지 않는다.
 * - Yoga 라이브러리에 따라 동작한다. (https://github.com/facebook/yoga)
 * flex가 야수인 경우 컴포넌트의 크기는 flex 값에 비례해서 사이즈가 결정된다.
 * 예를 들어 컴포넌트의 flex가 2라면 1로 설정된 컴포넌트에 비해 2배 사이즈를 가진다.
 * flex가 0이라면 컴포넌트는 width와 height에 따라 사이즈가 결정된다.
 * flex가 -1이라면 컴포넌트는 일반적으로 width와 height로 사이즈가 결정된다 그런데
 * 공간이 충분하지 않다면 minWidth와 minHeight까지 줄어들게 된다.
 *
 * flexGrow
 * flexShrink
 * flexBasis
*/

export default class FlexBasics extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={[styles.box, { flex: 1, backgroundColor: 'powderblue' }]}>
          <Text>1</Text>
        </View>
        <View style={[styles.box, { flex: 2, backgroundColor: 'skyblue' }]}>
          <Text>2</Text>
        </View>
        <View style={[styles.box, { flex: 3, backgroundColor: 'steelblue' }]}>
          <Text>3</Text>
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
    // width: 100,
    // height: 50,
  },
});
