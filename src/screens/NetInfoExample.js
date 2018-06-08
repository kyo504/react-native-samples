import React, { Component } from 'react';
import { View, Text, NetInfo } from 'react-native';
import { SafeAreaView } from 'react-navigation';

export default class NetInfoExample extends Component {
  state = {
    isConnected: false,
    type: 'none',
    effectiveType: 'unknown',
  };

  componentDidMount() {
    this._handleInitialConnectivity();

    NetInfo.isConnected.fetch().then(isConnected => {
      console.log('First, is ' + (isConnected ? 'online' : 'offline'));
      this.setState({ isConnected });
    });
    NetInfo.getConnectionInfo().then(connectionInfo => {
      console.log(
        'Initial, type: ' + connectionInfo.type + ', effectiveType: ' + connectionInfo.effectiveType
      );
      this.setState({ ...connectionInfo });
    });
    NetInfo.addEventListener('connectionChange', this._handleConnectionChange);
  }

  componentWillUnmount() {
    NetInfo.removeEventListener('connectionChange', this._handleConnectionChange);
  }

  _handleInitialConnectivity() {
    const onInitialNetConnection = isConnected => {
      console.log(`Is initially connected: ${isConnected}`);

      NetInfo.isConnected.removeEventListener(onInitialNetConnection);
    };

    NetInfo.isConnected.addEventListener('connectionChange', onInitialNetConnection);
  }

  _handleFirstConnectivityChange = isConnected => {
    console.log('Then, is ' + (isConnected ? 'online' : 'offline'));
    this.setState({ isConnected });
    NetInfo.isConnected.removeEventListener(
      'connectionChange',
      this._handleFirstConnectivityChange
    );
  };

  _handleConnectionChange = connectionInfo => {
    console.log('ConnectionInfo : ', connectionInfo);
    this.setState({ ...connectionInfo });
  };

  render() {
    const { isConnected, type, effectiveType } = this.state;
    return (
      <SafeAreaView style={{ flex: 1 }} forceInset={{ top: 'never', bottom: 'always ' }}>
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <Text>
            Current connection state: {this.state.isConnected ? 'connected' : 'disconnected'}
          </Text>
          <Text>Current connection type : {this.state.type}</Text>
          <Text>Current effective type is: {this.state.effectiveType}</Text>
        </View>
      </SafeAreaView>
    );
  }
}
