import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native'; // Version can be specified in package.json

/*
 * alignContent: 교차 축에 있는 행들을 제어합니다.
 * Note: 아이템들이 한줄로 배치되어 있다면 아무 효과를 발휘하지 않습니다.
 *
 * flex-start: 아이템들을 컨테이너의 시작부분으로 그룹화한다.
 * center: 아이템들을 컨테이너의 중앙에 그룹화한다.
 * flex-end: 아이템들을 컨테이너의 끝으로 그룹화한다.
 * space-around: 아이템들은 양끝에 동일한 공간을 가지고 고르게 분포됩니다. 모든 아이템의 양쪽에 동일한 공간이 있으므로 시각적으로 공간이 동일하지 않습니다. 첫번째 아이템은  양끝에 1에 해당하는 공간이 있고 다음 아이템도 1에 해당 공간이 양 끝에 있기 때문에 두 아이템 사이에는 2의 공간이 발생합니다.
 * space-between: 첫 번째 아이템과 마지막 아이템은 양 끝에 존재하고 나머지 아이템들은 동일한 간격을 유지한다.
 * stretch: 라인들이 남은 영역을 모두 취합니다.
 *
 * Reference: https://www.vobour.com/1-flexbox-이해-당신이-알아야-할-모든-것-understa
 * https://css-tricks.com/snippets/css/a-guide-to-flexbox/
*/

export default class JustifyContentBasics extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          alignContent: 'stretch',
          flexWrap: 'wrap',
          borderWidth: 1,
          borderColor: 'red',
        }}
      >
        <View style={{ width: 100, backgroundColor: 'powderblue' }} />
        <View style={{ width: 100, backgroundColor: 'skyblue' }} />
        <View style={{ height: 100, width: 100, backgroundColor: 'steelblue' }} />
        <View style={{ height: 100, width: 100, backgroundColor: 'powderblue' }} />
        <View style={{ height: 100, width: 100, backgroundColor: 'skyblue' }} />
        <View style={{ height: 100, width: 100, backgroundColor: 'steelblue' }} />
      </View>
    );
  }
}
