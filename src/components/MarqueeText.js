/*
 * @flow
 */
import React from "react";
import { View, Text, StyleSheet, Animated, ScrollView } from "react-native";

type Props = {
  children: string,
  duration?: number
};

type DefaultProps = {
  duration?: number
};

type State = {};

class filename extends React.PureComponent<Props, DefaultProps, State> {
  props: Props;
  state: State;

  static defaultProps = {
    duration: 3000
  };

  constructor() {
    super();

    this.animatedValue = new Animated.Value(0);
    this.state = {
      isAnimating: false
    };
  }

  componentDidMount() {
    console.log("Mounted!!");
    // this.scrollViewRef.measure((x, y, width, height) => {
    //   console.log(width, height);
    // })
  }

  start() {
    this.animatedValue.setValue(0);
    Animated.timing(this.animatedValue, {
      toValue: 1,
      duration: this.props.duration
    }).start();

    // this.setState({ isAnimating: true }, () => {
    //   Animated.timing(this.animatedValue, {
    //     toValue: 1,
    //     duration: this.props.duration
    //   }).start();
    // });
  }

  stop() {
    this.animatedValue.setValue(0);
    // this.setState({ isAnimating: false });
  }

  pause() {
    this.animatedValue.stopAnimation(value => {
      // this.animatedValue.setValue(value);
    });
  }

  resume() {
    Animated.timing(this.animatedValue, {
      toValue: 1,
      duration: this.props.duration
    }).start();
  }

  render() {
    console.log("render");
    const { children, ...rest } = this.props;
    const left = this.animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 300]
    });

    //const containerStyle = this.state.isAnimating ? {} : { flex: 1 };
    const containerStyle = {};

    return (
      <View style={{ overflow: "hidden" }}>
        <Text
          {...rest}
          numberOfLines={1}
          ellipsizeMode="tail"
          onLayout={({ nativeEvent }) => {
            console.log(nativeEvent);
            this.windowWidth = nativeEvent.layout.width;
          }}
        >
          {children}
        </Text>
        <Animated.ScrollView
          ref={c => {
            this.scrollViewRef = c;
          }}
          style={{
            position: "absolute",
            top: 0,
            left: -left,
            right: 0,
            bottom: 0
          }}
          contentContainerStyle={[containerStyle, { flex: 0, backgroundColor: "yellow" }]}
          horizontal
          scrollEnabled={false}
        >
          <Text
            {...rest}
            numberOfLines={1}
            ellipsizeMode="tail"
            onLayout={({ nativeEvent }) => {
              console.log(nativeEvent);
              this.textWidth = nativeEvent.layout.width;
            }}
          >
            {children}
          </Text>
        </Animated.ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    borderColor: "blue",
    borderWidth: 1
  }
});

export default filename;
