import React, { Component } from 'react';
import { AppRegistry, View, Text } from 'react-native'; // Version can be specified in package.json

/*
 * alignItems: 아이템들이 교차축을 따라 어떻게 배치되는지를 정의합니다. justifyContent와 반대되는 개념이라고 보시면 됩니다.
 *
 * flex-start: 아이템들을 교차축의 시작 부분에 그룹화한다.
 * center: 아이템들이 교차축의 중앙에 배치됩니다.
 * flex-end: 아이템들을 교차축의 끝 부분에 그룹화한다.
 * baseline: 아이템들이 baseline에 맞춰서 정렬된다.
 * stretch: 아이템이 컨테이너의 전체 높이를 채울수 있도록 아이템을 늘린다.
 *
 * Reference: https://www.vobour.com/1-flexbox-이해-당신이-알아야-할-모든-것-understa
 * https://css-tricks.com/snippets/css/a-guide-to-flexbox/
*/

export default class JustifyContentBasics extends Component {
  render() {
    return (
      <View
        style={{
          paddingTop: 20,
          flex: 1,
          flexDirection: 'row',
          alignItems: 'flex-end',
          justifyContent: 'space-between',
          borderWidth: 1,
          borderColor: 'red',
        }}
      >
        <View style={{ height: 100, width: 60, backgroundColor: 'powderblue' }}>
          <Text>I am box 1</Text>
        </View>
        <View style={{ height: 150, width: 60, backgroundColor: 'skyblue' }}>
          <Text style={{ fontSize: 20 }}>I am box 2</Text>
        </View>
        <View style={{ height: 60, width: 60, backgroundColor: 'steelblue' }}>
          <Text style={{ fontSize: 10 }}>I am box 3</Text>
        </View>
        <View style={{ height: 200, width: 60, backgroundColor: 'powderblue' }}>
          <Text style={{ fontSize: 40 }}>I am box 4</Text>
        </View>
      </View>
    );
  }
}
