import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, ImageBackground, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-navigation';

export default class ImageBasics extends Component {
  render() {
    return (
      <SafeAreaView style={{ flex: 1 }} forceInset={{ top: 'never', bottom: 'always' }}>
        <ScrollView>
          <View>
            <Text style={styles.headerText}>Static Image Resources</Text>
            <Image
              style={{ width: 200, height: 200 }}
              source={{ uri: 'https://picsum.photos/4096/4096/?random' }}
              defaultSource={require('../../assets/loading.gif')}
            />
            <Image
              style={{ width: 100, height: 100 }}
              source={require('../../assets/loading.gif')}
            />
            <ImageBackground
              style={{ width: 200, height: 200 }}
              source={{ uri: 'https://picsum.photos/400/400/?random' }}
            >
              <View style={styles.innerContainer}>
                <Text style={styles.innerText}>Text inside ImageBackground</Text>
              </View>
            </ImageBackground>
          </View>
          <View>
            <Text style={styles.headerText}>Local Images</Text>
            <Image
              style={{ width: 200, height: 200 }}
              source={require('../../assets/sample1.jpg')}
            />
            <ImageBackground
              style={{ width: 200, height: 200 }}
              source={require('../../assets/sample2.jpg')}
            >
              <View style={styles.innerContainer}>
                <Text style={styles.innerText}>Test</Text>
              </View>
            </ImageBackground>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerText: {
    fontSize: 20,
  },
  innerText: {
    color: 'white',
  },
  innerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
