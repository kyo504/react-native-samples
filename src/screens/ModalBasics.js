import React, { Component } from 'react';
import { Modal, Text, TouchableHighlight, View } from 'react-native';

export default class ModalBasics extends Component {
  state = {
    modalVisible: false,
    animationType: 'slide',
    transparent: false,
  };

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  render() {
    const { animationType } = this.state;
    return (
      <View style={{ marginTop: 22 }}>
        <View>
          <TouchableHighlight onPress={() => animationType === 'slide' ? 'fade' : 'slide'}>
            <Text>AnimationType: {animationType}</Text>
          </TouchableHighlight>
        </View>
        <TouchableHighlight
          onPress={() => {
            this.setModalVisible(true);
          }}
        >
          <Text>Show Modal</Text>
        </TouchableHighlight>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            alert('Modal has been closed.');
          }}
        >
          <View style={{ marginTop: 22 }}>
            <View>
              <Text>Hello World!</Text>

              <TouchableHighlight
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}
              >
                <Text>Hide Modal</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>

      </View>
    );
  }
}
