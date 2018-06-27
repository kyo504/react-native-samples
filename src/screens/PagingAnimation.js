/*
 * Reference:
 * https://github.com/facebook/react-native/blob/master/Libraries/LayoutAnimation/LayoutAnimation.js
 * https://github.com/facebook/react-native/blob/90eaeb019b2056150cae541a59720daad21466ef/RNTester/js/ListViewPagingExample.js
 */
import React from 'react';
import {
  Image,
  LayoutAnimation,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const THUMB_URLS = [
  require('../../assets/like.png'),
  require('../../assets/dislike.png'),
  require('../../assets/call.png'),
  require('../../assets/fist.png'),
  require('../../assets/bandaged.png'),
  require('../../assets/flowers.png'),
  require('../../assets/heart.png'),
  require('../../assets/liking.png'),
  require('../../assets/party.png'),
  require('../../assets/poke.png'),
  require('../../assets/superlike.png'),
  require('../../assets/victory.png'),
];
const NUM_ROWS = 100;

const animations = {
  layout: {
    spring: {
      duration: 750,
      create: {
        duration: 300,
        type: LayoutAnimation.Types.easeInEaseOut,
        property: LayoutAnimation.Properties.opacity,
      },
      update: {
        type: LayoutAnimation.Types.spring,
        springDamping: 0.4,
      },
    },
    easeInEaseOut: {
      duration: 300,
      create: {
        type: LayoutAnimation.Types.easeInEaseOut,
        property: LayoutAnimation.Properties.scaleXY,
      },
      update: {
        delay: 100,
        type: LayoutAnimation.Types.easeInEaseOut,
      },
    },
  },
};

const layoutAnimationConfigs = [
  animations.layout.spring,
  animations.layout.easeInEaseOut,
];


class Thumb extends React.Component {
  constructor(props) {
    super(props);

    this.state = { thumbIndex: this._getThumbIdx(), dir: 'row' };
  }

  _getThumbIdx = () => {
    return Math.floor(Math.random() * THUMB_URLS.length);
  };

  _onPressThumb = () => {
    const config = layoutAnimationConfigs[this.state.thumbIndex % layoutAnimationConfigs.length];
    LayoutAnimation.configureNext(config);
    this.setState({
      thumbIndex: this._getThumbIdx(),
      dir: this.state.dir === 'row' ? 'column' : 'row',
    });
  };

  render() {
    return (
      <TouchableOpacity
        onPress={this._onPressThumb}
        style={[styles.buttonContents, {flexDirection: this.state.dir}]}>
        <Image style={styles.img} source={THUMB_URLS[this.state.thumbIndex]} />
        <Image style={styles.img} source={THUMB_URLS[this.state.thumbIndex]} />
        <Image style={styles.img} source={THUMB_URLS[this.state.thumbIndex]} />
        {this.state.dir === 'column' ?
          <Text>
            Oooo, look at this new text!  So awesome it may just be crazy.
            Let me keep typing here so it wraps at least one line.
          </Text> :
          <Text />
        }
      </TouchableOpacity>
    );
  }
}

export default class PagingAnimation extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: Array.from({length: NUM_ROWS}, (v, k) => `${k}`),
      headerPressCount: 0,
    };
  }

  _onPressHeader = () => {
    const config = layoutAnimationConfigs[Math.floor(this.state.headerPressCount / 2) % layoutAnimationConfigs.length];
    LayoutAnimation.configureNext(config);
    this.setState({ headerPressCount: this.state.headerPressCount + 1 });
  };  

  renderItem = ({ item }) => {
    return (<Thumb />);
  };

  renderHeader = ({ item }) => {
    const headerLikeText = this.state.headerPressCount % 2 ? (
      <View>
        <Text style={styles.text}>1 Like</Text>
      </View>
    ) : null;
    return (
      <TouchableOpacity onPress={this._onPressHeader} style={styles.header}>
        {headerLikeText}
        <View>
          <Text style={styles.text}>
            Table Header (click me)
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  renderFooter = () => {
    return (
      <View style={styles.header}>
        <Text onPress={() => console.log('Footer!')} style={styles.text}>
          Table Footer
        </Text>
      </View>
    );
  };

  render() {
    return (
      <FlatList
        keyExtractor={(item, index) => index}
        style={styles.listview}
        data={this.state.data}
        extraData={this.state}
        ListHeaderComponent={this.renderHeader}
        ListFooterComponent={this.renderFooter}
        renderItem={this.renderItem}
        initialListSize={10}
        pageSize={4}
        scrollRenderAheadDistance={500}
      />
    );
  }
}

var styles = StyleSheet.create({
  listview: {
    backgroundColor: '#B0C4DE',
  },
  header: {
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3B5998',
    flexDirection: 'row',
  },
  text: {
    color: 'white',
    paddingHorizontal: 8,
  },
  rowText: {
    color: '#888888',
  },
  thumbText: {
    fontSize: 20,
    color: '#888888',
  },
  buttonContents: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
    marginVertical: 3,
    padding: 5,
    backgroundColor: '#EAEAEA',
    borderRadius: 3,
    paddingVertical: 10,
  },
  img: {
    width: 64,
    height: 64,
    marginHorizontal: 10,
    backgroundColor: 'transparent',
  },
  section: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: 6,
    backgroundColor: '#5890ff',
  },
});
