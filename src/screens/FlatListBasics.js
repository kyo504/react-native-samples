import React, { Component } from 'react';
import { View, StyleSheet, FlatList, Dimensions, Text } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import uuid from 'uuid/v1';

function getRandomInt(min = 0, max = 255) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const { width: deviceWidth } = Dimensions.get('window');

const listData = Array.from({ length: 100 }, (v, k) => k).map(value => {
  const r = getRandomInt(0, 255);
  const g = getRandomInt(0, 255);
  const b = getRandomInt(0, 255);
  return {
    key: uuid(),
    color: `rgb(${r},${g},${b})`,
  };
});

export default class FlatListBasics extends Component {
  constructor(props) {
    super(props);

    this.state = {
      horizontal: false,
    };
  }

  renderItem = ({ item }) => {
    return <View style={{ flex: 1, backgroundColor: item.color, height: deviceWidth / 5 }} />;
  };

  render() {
    const { horizontal } = this.state;
    return (
      <SafeAreaView style={{ flex: 1 }} forceInset={{ top: 'never', bottom: 'always' }}>
        <View style={{ flex: 1 }}>
          <FlatList
            data={listData}
            horizontal={horizontal}
            renderItem={this.renderItem}
            // numColumns={5}
          />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  box: {},
});
