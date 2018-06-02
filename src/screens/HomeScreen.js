/**
 * @flow
 */
import React from 'react';
import { ScrollView, View, Text, Button, TouchableHighlight, StyleSheet } from 'react-native';

const list = [
  // Day 2
  'FlexDirectionBasics',
  'FlexWrapBasics',
  'JustifyContentBasics',
  'AlignContentBasics',
  'AlignItemsBasics',
  'FlexBasics',
  'FlexBasics2',
  'FlexAdvanced',
  'AlignSelfBasics',
  'ViewBasics',
  'TextInputBasics',
  'TouchableBasics',
  'ScrollViewBasics',
];

export default class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          {list.map(routeName => {
            return (
              <TouchableHighlight
                key={routeName}
                style={styles.item}
                underlayColor="lightgray"
                onPress={() => this.props.navigation.navigate(routeName)}
              >
                <Text>{routeName}</Text>
              </TouchableHighlight>
            );
          })}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    height: 48,
    justifyContent: 'center',
    borderBottomColor: 'black',
    borderBottomWidth: StyleSheet.hairlineWidth,
    padding: 5,
  },
});
