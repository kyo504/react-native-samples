import React, { Component } from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import CarouselView from '../components/CarouselView';

export default class GalleryModal extends Component {
  render() {
    const { index, images } = this.props.navigation.state.params;
    return (
      <SafeAreaView style={{ flex: 1 }} forceInset={{ top: 'never', bottom: 'always' }}>
        <View style={{ flex: 1 }}>
          <CarouselView initialIndex={index} images={images} />
          <TouchableOpacity
            style={styles.closeButton}
            onPress={() => this.props.navigation.goBack()}
          >
            <Icon name={'close'} size={25} color={'white'} />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  closeButton: {
    position: 'absolute',
    left: 10,
    top: 20,
  },
});
