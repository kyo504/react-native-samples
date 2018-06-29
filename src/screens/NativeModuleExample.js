import React, { Component } from 'react';
import { Platform, DeviceEventEmitter, NativeEventEmitter, Text, TouchableHighlight, View } from 'react-native';
import { SafeAreaView } from 'react-navigation';

import NativeInfo from '../nativeModules';

const eventEmitter = Platform.select({
  ios: new NativeEventEmitter(NativeInfo),
  android: DeviceEventEmitter,
});

export default class ModalBasics extends Component {

  constructor(props) {
    super(props);

    this.state = {
      userName: 'N/A',
      platformName: 'N/A',
      deviceName: 'N/A',
    }
  }

  componentDidMount() {
    this.listener = eventEmitter.addListener('onReceived', this.onReceived);

    this.getDeviceName();
    this.getPlatform();
    NativeInfo.sendUserName();
  }

  componentWillUnmount() {
    this.listener.remove();
  }

  onReceived = ({ userName }) => {
    this.setState({ userName })
  }

  getPlatform = async () => {
    try {
      const platformName = await NativeInfo.getPlatformName();
      this.setState({ platformName });
    } catch(e) {
      this.setState({ platformName: 'N/A'})
    }
  }

  getDeviceName = () => {
    NativeInfo.getDeviceName((error, deviceName) => {
      this.setState({ deviceName });
    })
  }

  render() {
    const { platformName, deviceName, userName } = this.state;
    return (
      <SafeAreaView style={{ flex: 1 }} forceInset={{ top: 'always', bottom: 'never' }}>
        <View style={{ flex: 1 }}>
          <Text>Platform Name: {platformName}</Text>
          <Text>Device Name: {deviceName}</Text>
          <Text>User Name: {userName}</Text>
        </View>
      </SafeAreaView>
    );
  }
}
