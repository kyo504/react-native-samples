/*
 * @flow
 */
import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

import MarqueeText from '../components/MarqueeText';

class MarqueeTextSample extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <MarqueeText
          ref={c => {
            this.marqueeTextRef = c;
          }}
        >
          android --warning:failed prop type:the prop 'viewRef' is marked as
        </MarqueeText>
        <View style={{ flexDirection: 'row' }}>
          <Button
            title="Start"
            onPress={() => {
              this.marqueeTextRef.start();
            }}
          />
          <Button
            title="Stop"
            onPress={() => {
              this.marqueeTextRef.stop();
            }}
          />
          <Button
            title="Pause"
            onPress={() => {
              this.marqueeTextRef.pause();
            }}
          />
          <Button
            title="Resume"
            onPress={() => {
              this.marqueeTextRef.resume();
            }}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'yellow',
    borderWidth: 1,
    padding: 20,
  },
});

export default MarqueeTextSample;
