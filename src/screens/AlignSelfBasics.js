import React, { Component } from 'react';
import { View, Text } from 'react-native'; // Version can be specified in package.json

/*
 * align-self: 개별 아이템에 대한 베치를 덮어 쓰기 위한 옵션입니다.
 *
 * flex-start: 아이템을 교차축의 시작 부분에 배치합니다.
 * center: 아이템을 교차축의 중앙에 배치합니다.
 * flex-end: 아이템을 교차축의 끝 부분에 배치합니다.
 * baseline: 아이템을 baseline에 맞춰서 배치합니다.
 * stretch: 아이템이 컨테이너의 전체 높이를 채울수 있도록 아이템을 늘립니다.
 *
 * Reference: https://www.vobour.com/1-flexbox-이해-당신이-알아야-할-모든-것-understa
 * https://css-tricks.com/snippets/css/a-guide-to-flexbox/
*/

export default class AlignSelfBasics extends Component {
  render() {
    return (
      <View
        style={{
          paddingTop: 20,
          flex: 1,
          flexDirection: 'row',
          alignItems: 'flex-start',
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
        <View
          style={{ alignSelf: 'flex-end', height: 60, width: 60, backgroundColor: 'steelblue' }}
        >
          <Text style={{ fontSize: 10 }}>I am box 3</Text>
        </View>
        <View style={{ height: 200, width: 60, backgroundColor: 'powderblue' }}>
          <Text style={{ fontSize: 40 }}>I am box 4</Text>
        </View>
      </View>
    );
  }
}
