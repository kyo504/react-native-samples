/**
 * @flow
 */
import React from 'react';
import { ScrollView, View, Text, Button, TouchableHighlight, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-navigation';

const list = [
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
  'TodoApp',
  'TodoApp2',
  'FlatListBasics',
  'SectionListBasics',
  'ImageBasics',
];

export default class HomeScreen extends React.Component {
  render() {
    return (
      <SafeAreaView style={{ flex: 1 }} forceInset={{ top: 'never', bottom: 'always' }}>
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
      </SafeAreaView>
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
