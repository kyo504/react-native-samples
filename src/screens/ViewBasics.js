import React, { Component } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

export default class ViewBasic extends Component {
  state = {
    width: 60,
    height: 60,
  };

  // {nativeEvent: { layout: {x, y, width, height}}}
  onChangeLayout = event => {
    const { nativeEvent: { layout } } = event;
    console.log(layout);
  };

  onGrow = () => {
    const { width, height } = this.state;
    this.setState({
      width: width + 10,
      height: height + 10,
    });
  };

  onShrink = () => {
    const { width, height } = this.state;
    this.setState({
      width: width - 10,
      height: height - 10,
    });
  };

  render() {
    const { width, height } = this.state;
    return (
      <View style={styles.container}>
        <Button title="Bigger" onPress={this.onGrow} />
        <Button title="Smaller" onPress={this.onShrink} />
        <View style={[styles.box, { width, height }]} onLayout={this.onChangeLayout} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
  box: {
    minHeight: 20,
    minWidth: 20,
    maxHeight: 150,
    maxWidth: 150,
    backgroundColor: 'blue',
  },
});
