import React, { Component } from 'react';
import {
  View,
  Image,
  ActivityIndicator,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const IMAGE_WIDTH = Dimensions.get('window').width / 3;

class GridView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      refreshing: false,
      isFetching: false,
    };

    this.onEndReachedCalledDuringMomentum = true;
  }

  onRefresh = async () => {
    try {
      this.setState({ refreshing: true });
      await this.props.loadImages();
      this.setState({ refreshing: false });
    } catch (e) {
      console.warn(e);
    }
  };

  onEndReached = async () => {
    try {
      if (!this.onEndReachedCalledDuringMomentum) {
        console.log('HFSIDHGOSHGOISHFG');
        this.setState({ isFetching: true });
        await this.props.loadImages(true);
        this.onEndReachedCalledDuringMomentum = true;
        this.setState({ isFetching: false });
      }
    } catch (e) {
      console.warn(e);
    }
  };

  renderThumnailOverlay = (item, index) => {
    const { selected = false } = item;
    const iconName = selected ? 'checkbox-marked-circle' : 'checkbox-blank-circle-outline';
    const color = selected ? 'yellow' : 'white';
    let overlayStyle = {};

    if (selected) {
      overlayStyle = {
        borderColor: 'yellow',
        borderWidth: 2,
      };
    }

    return (
      <TouchableOpacity
        style={[StyleSheet.absoluteFill, { alignItems: 'flex-end' }, overlayStyle]}
        onPress={() => this.props.onSelectImage(index)}
      >
        <Icon
          name={iconName}
          size={25}
          color={selected ? 'yellow' : 'white'}
          style={{ margin: 5 }}
        />
      </TouchableOpacity>
    );
  };

  renderThumnail = ({ item, index }) => {
    const { isEditMode } = this.props;
    const { selected = false } = item;

    return (
      <TouchableOpacity onPress={() => this.props.onChangeViewMode(index)}>
        <Image style={[styles.thumbnail]} source={{ uri: item.url }} />
        {isEditMode && this.renderThumnailOverlay(item, index)}
      </TouchableOpacity>
    );
  };

  renderFooter = () => {
    console.log('Render footer!!!', this.state.isFetching);
    if (!this.state.isFetching) {
      return null;
    }

    return (
      <View style={styles.footerContainer}>
        <ActivityIndicator />
      </View>
    );
  };

  render() {
    const { refreshing } = this.state;
    const { images } = this.props;

    return (
      <FlatList
        keyExtractor={item => `${item.id}`}
        data={images}
        extraData={this.state}
        numColumns={3}
        renderItem={this.renderThumnail}
        ListFooterComponent={this.renderFooter}
        refreshing={refreshing}
        onRefresh={this.onRefresh}
        onEndReached={this.onEndReached}
        onEndReachedThreshold={1}
        onMomentumScrollBegin={() => {
          this.onEndReachedCalledDuringMomentum = false;
        }}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 20,
  },
  thumbnail: {
    width: IMAGE_WIDTH,
    height: IMAGE_WIDTH,
    borderColor: 'white',
    borderWidth: 1,
  },
  footerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    backgroundColor: 'lightgray',
  },
});

export default GridView;
