import React, { Component } from 'react';
import { AppState, View, Text } from 'react-native';
import { SafeAreaView } from 'react-navigation';

export default class AppStateExample extends Component {
  state = {
    appState: AppState.currentState,
  };

  componentDidMount() {
    this.listener = AppState.addListener('appStateDidChange', this._handleAppStateChange);
  }

  componentWillUnmount() {
    this.listener.remove();
  }

  _handleAppStateChange = ({ app_state: appState }) => {
    console.log('Current app state : ', appState)
    this.setState({ appState });
  };

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }} forceInset={{ top: 'never', bottom: 'always ' }}>
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <Text>Current state is: {this.state.appState}</Text>
        </View>
      </SafeAreaView>
    );
  }
}
