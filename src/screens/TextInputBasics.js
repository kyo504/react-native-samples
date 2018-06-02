import React, { Component } from 'react';
import { TextInput, Text, View, StyleSheet, Button } from 'react-native';

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
          <Text style={{ marginVertical: 10 }}>한 줄 텍스트 입력:</Text>
          <TextInput
            style={styles.text1}
            value={message}
            placeholder="Enter any text"
            onFocus={() => console.log('Focus!')}
            onBlur={() => console.log('Blur!')}
            onChangeText={message => this.setState({ message })}
          />
          <Text style={styles.text2}>{message}</Text>
        </View>
        <View style={{ borderWidth: 1, borderColor: 'red' }}>
          <Text style={{ marginVertical: 10 }}>여러줄 텍스트 입력:</Text>
          <TextInput
            style={styles.text2}
            value={message2}
            placeholder="Enter long text"
            onFocus={() => console.log('Focus!')}
            onBlur={() => console.log('Blur!')}
            onChangeText={message2 => this.setState({ message2 })}
            multiline
          />
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
  text1: {
    fontSize: 20,
  },
  text2: {
    fontSize: 20,
  },
});
