import React, { Component } from 'react';
import { View, Text, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-navigation';

export default class DimensionsBasics extends Component {
  constructor(props) {
    super(props);

    this.state = {
      window: Dimensions.get('window'),
      screen: Dimensions.get('screen'),
    };
  }

  componentDidMount() {
    Dimensions.addEventListener('change', this.onUpdateDimensions);
  }

  componentWillUnmount() {
    Dimensions.removeEventListener('change', this.onUpdateDimensions);
  }

  onUpdateDimensions = dimensions => {
    console.log(dimensions);
    this.setState(dimensions);
  };

  render() {
    const { window, screen } = this.state;
    return (
      <SafeAreaView style={{ flex: 1 }} forceInset={{ top: 'never', bottom: 'always' }}>
        <View>
          <Text style={{ fontWeight: 'bold', marginVertical: 10 }}>Dimensinos for Window</Text>
          <Text>Width: {window.width}</Text>
          <Text>Height: {window.height}</Text>
          <Text>FontScale: {window.fontScale}</Text>
          <Text>Scale: {window.scale}</Text>
          <Text style={{ fontWeight: 'bold', marginVertical: 10 }}>Dimensinos for Screen</Text>
          <Text>Width: {screen.width}</Text>
          <Text>Height: {screen.height}</Text>
          <Text>FontScale: {screen.fontScale}</Text>
          <Text>Scale: {screen.scale}</Text>
        </View>
      </SafeAreaView>
    );
  }
}
