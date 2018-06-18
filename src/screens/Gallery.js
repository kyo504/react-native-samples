/**
 * @flow
 */
import React from 'react';
import {
  View,
  Text,
  Button,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  FlatList,
  Image,
  ActivityIndicator,
  LayoutAnimation,
} from 'react-native';
import { SafeAreaView } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import uuid from 'uuid/v1';

import CarouselView from '../components/CarouselView';
import GridView from '../components/GridView';
import { delay } from '../util';

// const mock = require('../../assets/mock.json');
const IMAGES_PER_PAGE = 30;
const FETCH_URL = 'https://picsum.photos/list';
function getRandomInt(min = 0, max = 1000) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default class Gallery extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const { params = {} } = navigation.state;
    const { onChangeMode, isEditMode } = params;
    return {
      headerRight: (
        <Text style={{ marginRight: 20 }} onPress={() => onChangeMode && onChangeMode()}>
          {isEditMode ? '취소' : '편집'}
        </Text>
      ),
    };
  };

  constructor(props) {
    super(props);

    this.state = {
      images: [],
      isEditMode: false,
      bottom: -50,
      index: 0,
    };
  }

  componentDidMount() {
    this.props.navigation.setParams({
      onChangeMode: this.onChangeMode,
    });

    this.loadImages();
  }

  onChangeMode = () => {
    console.log('mode: ', this.state.isEditMode);
    this.props.navigation.setParams({ isEditMode: !this.state.isEditMode });
    this.setState({ isEditMode: !this.state.isEditMode });
    LayoutAnimation.configureNext({
      duration: 200,
      update: {
        type: LayoutAnimation.Types.linear,
      },
    });
    this.setState({ bottom: !this.state.isEditMode ? 0 : -50 });
  };

  onChangeViewMode = index => {
    this.props.navigation.navigate('GalleryModal', {
      index,
      images: this.state.images,
    })
  };

  onSelectImage = index => {
    const { images, isEditMode } = this.state;

    this.setState({
      images: [
        ...images.slice(0, index),
        { ...images[index], selected: !images[index].selected },
        ...images.slice(index + 1),
      ],
    });
  };

  onDeleteImage = () => {
    const { images } = this.state;

    this.setState({
      images: images.filter(image => !image.selected),
    });
  };

  onChangeIndex = index => {
    this.setState({ index });
  };

  generateMockData() {
    const newImages = [];
    for (let i = 0; i < IMAGES_PER_PAGE; i++) {
      newImages.push({
        id: uuid(),
        url: `https://picsum.photos/300/300?image=${getRandomInt()}`,
      });
    }
    return newImages;
  }

  loadImages = async (isMore = false) => {
    try {
      const { images, pageNo } = this.state;
      if (isMore) {
        await delay(2000);
        const newImages = this.generateMockData();
        this.setState({
          images: this.state.images.concat(newImages),
          pageNo: pageNo + 1,
        });
      } else {
        await delay(2000);
        const newImages = this.generateMockData();
        this.setState({ images: newImages, pageNo: 0 });
      }
    } catch (e) {
      console.warn(e);
    }
  };

  render() {
    const { images, isGridMode, bottom, index, modalVisible } = this.state;
    return (
      <SafeAreaView style={{ flex: 1 }} forceInset={{ top: 'never', bottom: 'always' }}>
        <View style={[styles.container, { overflow: 'hidden' }]}>
          <GridView
            {...this.state}
            loadImages={this.loadImages}
            onSelectImage={this.onSelectImage}
            onChangeViewMode={this.onChangeViewMode}
          />
          <View style={[styles.footerContainer, { bottom }]}>
            <TouchableOpacity onPress={this.onDeleteImage}>
              <Icon name={'delete'} size={25} />
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  footerContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    height: 50,
    backgroundColor: 'lightgray',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  closeButton: {
    position: 'absolute',
    left: 10,
    top: 20,
  },
});
