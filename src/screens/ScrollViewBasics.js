import React, { Component } from 'react';
import { ScrollView, Text, View, StyleSheet, Button, Dimensions } from 'react-native';

function getRandomInt(min = 0, max = 255) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const { width: deviceWidth } = Dimensions.get('window');

export default class ScrollViewBasic extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView contentContainerStyle={{ flexDirection: 'row', flexWrap: 'wrap' }}>
          {Array.from({ length: 100 }, (v, k) => k).map(value => {
            var r = getRandomInt(0, 255);
            var g = getRandomInt(0, 255);
            var b = getRandomInt(0, 255);
            const backgroundColor = `rgb(${r},${g},${b})`;
            return (
              <View style={[styles.box, { backgroundColor }]}>
                <Text>{value + 1}</Text>
              </View>
            );
          })}
        </ScrollView>
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
  box: {
    width: deviceWidth / 5,
    height: deviceWidth / 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
