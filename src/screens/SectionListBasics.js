import React, { Component } from 'react';
import { View, Text, StyleSheet, SectionList } from 'react-native';
import { SafeAreaView } from 'react-navigation';

import data from '../../assets/mock.json';

export default class SectionListBasics extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sections: this.generateSections(),
    };
  }

  generateSections = () => {
    return data.reduce((prev, item) => {
      const index = prev.findIndex(({ category }) => category === item.author.charAt(0));
      if (index >= 0) {
        prev[index].data.push(item);
      } else {
        prev.push({
          category: item.author.charAt(0),
          data: [item],
        });
      }

      return prev;
    }, []).sort((a, b) => {
      const nameA = a.category;
      const nameB = b.category;
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
    
      // 이름이 같을 경우
      return 0;      
    })
  };

  renderItem = ({ item, index, section }) => {
    return (
      <View style={styles.item}>
        <Text>Author: {item.author}</Text>
        <Text>Filename: {item.filename}</Text>
      </View>
    );
  };

  renderSeperator = () => {
    return <View style={styles.seperator} />;
  };

  renderSectionHeader = ({ section }) => {
    return (
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionHeaderText}>{section.category}</Text>
      </View>
    );
  };

  render() {
    const { sections } = this.state;
    return (
      <SafeAreaView style={{ flex: 1 }} forceInset={{ top: 'never', bottom: 'always' }}>
        <View>
          <SectionList
            sections={sections}
            renderItem={this.renderItem}
            ItemSeparatorComponent={this.renderSeperator}
            renderSectionHeader={this.renderSectionHeader}
          />
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
    justifyContent: 'center'
  },
  seperator: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: 'lightgray',
  },
  sectionContainer: {
    height: 36,
    backgroundColor: 'white',
    justifyContent: 'center',
    paddingLeft: 10,
  },
  sectionHeaderText: {
    fontWeight: 'bold',
  },
});
