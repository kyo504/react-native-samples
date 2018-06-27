/*
 * Reference:
 * https://github.com/facebook/react-native/blob/master/Libraries/LayoutAnimation/LayoutAnimation.js
 * https://github.com/facebook/react-native/blob/90eaeb019b2056150cae541a59720daad21466ef/RNTester/js/LayoutEventsExample.js
 */
import React from 'react';
import { View, Text, StyleSheet, LayoutAnimation, Image } from 'react-native';

export default class LayoutEventAnimation extends React.Component {
  state: State = {
    viewStyle: {
      margin: 20,
    },
  };

  animateViewLayout = () => {

    const config = {
      ...LayoutAnimation.Presets.easeInEaseOut,
    }
    const onAnimationDidEnd = () => {
      console.log('layout animation done.');
      this.addWrapText();
    }

    LayoutAnimation.configureNext(config, onAnimationDidEnd);

    this.setState({
      viewStyle: {
        margin: this.state.viewStyle.margin > 20 ? 20 : 100,
      }
    });
  };

  addWrapText = () => {
    this.setState(
      {extraText: '  And a bunch more text to wrap around a few lines.'},
      this.changeContainer
    );
  };

  changeContainer = () => {
    this.setState({containerStyle: {width: 280, borderColor: 'green', borderWidth: 1}});
  };

  onViewLayout = (e: ViewLayoutEvent) => {
    console.log('received view layout event\n', e.nativeEvent);
    this.setState({viewLayout: e.nativeEvent.layout});
  };

  onTextLayout = (e: ViewLayoutEvent) => {
    console.log('received text layout event\n', e.nativeEvent);
    this.setState({textLayout: e.nativeEvent.layout});
  };

  onImageLayout = (e: ViewLayoutEvent) => {
    console.log('received image layout event\n', e.nativeEvent);
    this.setState({imageLayout: e.nativeEvent.layout});
  };

  render() {
    var viewStyle = [styles.view, this.state.viewStyle];
    var textLayout = this.state.textLayout || {width: '?', height: '?'};
    var imageLayout = this.state.imageLayout || {x: '?', y: '?'};
    return (
      <View style={this.state.containerStyle}>
        <Text>
          layout events are called on mount and whenever layout is recalculated. Note that the layout event will typically be received <Text style={styles.italicText}>before</Text> the layout has updated on screen, especially when using layout animations.{'  '}
          <Text style={styles.pressText} onPress={this.animateViewLayout}>
            Press here to change layout.
          </Text>
        </Text>
        <View ref="view" onLayout={this.onViewLayout} style={viewStyle}>
          <Image
            ref="img"
            onLayout={this.onImageLayout}
            style={styles.image}
            source={{uri: 'https://unsplash.it/200/200'}}
          />
          <Text>
            ViewLayout: {JSON.stringify(this.state.viewLayout, null, '  ') + '\n\n'}
          </Text>
          <Text ref="txt" onLayout={this.onTextLayout} style={styles.text}>
            A simple piece of text.{this.state.extraText}
          </Text>
          <Text>
            {'\n'}
            Text w/h: {textLayout.width}/{textLayout.height + '\n'}
            Image x/y: {imageLayout.x}/{imageLayout.y}
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  view: {
    padding: 12,
    borderColor: 'red',
    borderWidth: 1,
    backgroundColor: 'transparent',
  },
  text: {
    alignSelf: 'flex-start',
    borderColor: 'rgba(0, 0, 255, 0.2)',
    borderWidth: 0.5,
  },
  image: {
    width: 50,
    height: 50,
    marginBottom: 10,
    alignSelf: 'center',
  },
  pressText: {
    fontWeight: 'bold',
  },
  italicText: {
    fontStyle: 'italic',
  },
});
