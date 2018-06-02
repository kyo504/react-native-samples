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
 *
 * Reference: https://stackoverflow.com/questions/43143258/flex-vs-flexgrow-vs-flexshrink-vs-flexbasis-in-react-native/43147710#43147710
*/

export default class FlexAdvanced extends Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'white', paddingTop: 20 }}>
        <View style={{ backgroundColor: 'chartreuse' }}>
          <Text>Nothing (17px)</Text>
        </View>

        <View style={{ flex: 0, backgroundColor: 'yellow' }}>
          <Text>flex: 0 (17px)</Text>
        </View>

        <View style={{ flex: 0, flexBasis: 10, backgroundColor: 'brown' }}>
          <Text>flex: 0, flexBasis: 10 (10px)</Text>
        </View>
        <View style={{ flex: 0, flexGrow: 1, backgroundColor: 'orange' }}>
          <Text>flex: 0, flexGrow: 1 (97px)</Text>
        </View>
        <View style={{ flex: 0, flexShrink: 1, backgroundColor: 'tan' }}>
          <Text>flex: 0, flexShrink: 1 (17px)</Text>
        </View>
        <View
          style={{
            flex: 0,
            flexGrow: 1,
            flexBasis: 100,
            backgroundColor: 'purple',
          }}
        >
          <Text>flex: 0, flexGrow: 1, flexBasis: 10 (90px)</Text>
        </View>
        <View
          style={{
            flex: 0,
            flexShrink: 1,
            flexBasis: 10,
            backgroundColor: 'gray',
          }}
        >
          <Text>
            flex: 0, flexShrink: 1, flexBasis: 10 (10px with 7px hidden below the next element)
          </Text>
        </View>

        <View style={{ flex: 1, backgroundColor: 'blue' }}>
          <Text>flex: 1 (80px)</Text>
        </View>

        <View style={{ flex: 1, flexBasis: 10, backgroundColor: 'cornsilk' }}>
          <Text>flex: 1, flexBasis: 10 (90px)</Text>
        </View>
        <View style={{ flex: 1, flexGrow: 1, backgroundColor: 'red' }}>
          <Text>flex: 1, flexGrow: 1 (80px)</Text>
        </View>
        <View style={{ flex: 1, flexShrink: 1, backgroundColor: 'green' }}>
          <Text>flex: 1, flexShrink: 1 (80px)</Text>
        </View>
        <View
          style={{
            flex: 1,
            flexGrow: 1,
            flexBasis: 10,
            backgroundColor: 'aqua',
          }}
        >
          <Text>flex: 1, flexGrow: 1, flexBasis: 10 (90px)</Text>
        </View>
        <View
          style={{
            flex: 1,
            flexShrink: 1,
            flexBasis: 10,
            backgroundColor: 'pink',
          }}
        >
          <Text>flex: 1, flexShrink: 1, flexBasis: 10 (90px)</Text>
        </View>
      </View>
    );
  }
}
