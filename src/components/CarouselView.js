import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import Gallery from 'react-native-image-gallery';

class CarouselView extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { images, initialIndex } = this.props;

    return (
      <View style={styles.container}>
        <Gallery
          style={{ flex: 1, backgroundColor: 'black' }}
          images={images.map(image => ({
            source: { uri: image.url },
          }))}
          initialPage={initialIndex}
          removeClippedSubviews={false} // To fix image is not shown
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default CarouselView;
