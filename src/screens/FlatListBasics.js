import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  Dimensions,
  Text,
  TouchableOpacity,
  Picker,
  Modal,
} from 'react-native';
import { SafeAreaView } from 'react-navigation';
import uuid from 'uuid/v1';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

function getRandomInt(min = 0, max = 255) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const listData = Array.from({ length: 100 }, (v, k) => k).map(value => {
  const r = getRandomInt(0, 255);
  const g = getRandomInt(0, 255);
  const b = getRandomInt(0, 255);
  return {
    key: uuid(),
    color: `rgb(${r},${g},${b})`,
  };
});

const { width: deviceWidth } = Dimensions.get('window');

export default class FlatListBasics extends Component {
  static navigationOptions = ({ navigation }) => {
    const {
      params: { onChangeDirection, horizontal } = {
        onChangeDirection() {},
        horizontal: false,
      },
    } = navigation.state;
    return {
      headerRight: (
        <TouchableOpacity style={{ marginHorizontal: 10 }} onPress={onChangeDirection}>
          <Icon name={horizontal ? 'reorder-vertical' : 'reorder-horizontal'} size={20} />
        </TouchableOpacity>
      ),
    };
  };

  constructor(props) {
    super(props);

    this.state = {
      horizontal: false,
    };
  }

  componentDidMount() {
    this.props.navigation.setParams({
      onChangeDirection: this.onChangeDirection,
      horizontal: this.state.horizontal,
    });
  }

  generateList = () => {
    return Array.from({ length: 100 }, (v, k) => k).map(value => {
      const r = getRandomInt(0, 255);
      const g = getRandomInt(0, 255);
      const b = getRandomInt(0, 255);
      return {
        key: uuid(),
        color: `rgb(${r},${g},${b})`,
      };
    });
  };

  onChangeDirection = () => {
    this.props.navigation.setParams({ horizontal: !this.state.horizontal });
    this.setState({ horizontal: !this.state.horizontal });
  };

  renderItem = ({ item }) => {
    const { horizontal } = this.state;
    const itemStyle = {
      flex: 1,
      backgroundColor: item.color,
      [horizontal ? 'width' : 'height']: deviceWidth / 5,
    };
    return <View style={itemStyle} />;
  };

  renderSeperator = () => {
    const { horizontal } = this.state;
    return (
      <View
        style={[styles.seperator, { [horizontal ? 'width' : 'height']: StyleSheet.hairlineWidth }]}
      />
    );
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
            ItemSeparatorComponent={this.renderSeperator}
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
  seperator: {
    backgroundColor: 'white',
  },
});
