import React, { Component } from 'react';
import {
  Platform,
  Text,
  View,
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity,
  TouchableWithoutFeedback,
  TouchableNativeFeedback,
} from 'react-native';

const TouchableElement = Platform.OS === 'ios' ? TouchableHighlight : TouchableNativeFeedback;

export default class TextInputBasic extends Component {
  state = {
    message: '',
    message2: '',
  };
  onShowAlert = message => {
    alert(message);
  };
  render() {
    const { message, message2 } = this.state;
    return (
      <View style={styles.container}>
        <View style={{ borderWidth: 1, borderColor: 'green' }}>
          <Text style={{ marginVertical: 10, fontWeight: 'bold' }}>
            TouchableHighlight or TouchableNativeFeedback
          </Text>
          <TouchableElement
            style={styles.button}
            onPress={() => alert('Pressed!!')}
            underlayColor="blue"
          >
            <View>
              <Text>Click Me!</Text>
            </View>
          </TouchableElement>
        </View>
        <View style={{ borderWidth: 1, borderColor: 'green' }}>
          <Text style={{ marginVertical: 10, fontWeight: 'bold' }}>TouchanbleOpacity</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => alert('Pressed!!')}
            activeOpacity={0.5}
          >
            <View>
              <Text>Click Me!</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={{ borderWidth: 1, borderColor: 'green' }}>
          <Text style={{ marginVertical: 10, fontWeight: 'bold' }}>TouchanbleOpacity</Text>
          <TouchableWithoutFeedback onPress={() => alert('Pressed!!')}>
            <View style={styles.button}>
              <Text>Click Me!</Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
  button: {
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: 'red',
    margin: 10,
  },
});
