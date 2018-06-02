import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native'; // Version can be specified in package.json

/*
 * justifyContent: primary axix에서 flex 아이템을 배치하는 방법을 정의
 *
 * flex-start: 아이템들을 주축의 시작 부분으로 그룹화한다.
 * center: 아이템들을 주축을 따라 중아에 배치한다.
 * flex-end: 아이템들을 주축의 끝으로 그룹화한다.
 * space-around: 아이템들은 양끝에 동일한 공간을 가지고 고르게 분포됩니다. 모든 아이템의 양쪽에 동일한 공간이 있으므로 시각적으로 공간이 동일하지 않습니다. 첫번째 아이템은  양끝에 1에 해당하는 공간이 있고 다음 아이템도 1에 해당 공간이 양 끝에 있기 때문에 두 아이템 사이에는 2의 공간이 발생합니다.
 * space-between: 첫 번째 아이템과 마지막 아이템은 양 끝에 존재하고 나머지 아이템들은 동일한 간격을 유지한다.
 * space-evenly: 아이템 간의 공간이 모두 동일하게 유지됩니다.
 *
 * Reference: https://www.vobour.com/1-flexbox-이해-당신이-알아야-할-모든-것-understa
 * https://css-tricks.com/snippets/css/a-guide-to-flexbox/
*/

export default class JustifyContentBasics extends Component {
  render() {
    return (
      // Try setting `justifyContent` to `center`.
      // Try setting `flexDirection` to `row`.
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'space-around',
          borderWidth: 1,
          borderColor: 'red',
        }}
      >
        <View style={{ width: 50, height: 100, backgroundColor: 'powderblue' }} />
        <View style={{ width: 50, height: 50, backgroundColor: 'skyblue' }} />
        <View style={{ width: 50, height: 150, backgroundColor: 'steelblue' }} />
      </View>
    );
  }
}
