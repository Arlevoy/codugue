/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  NavigatorIOS,
  StatusBar,
} from 'react-native';

const Main = require('./App/Component/Main');

var styles = StyleSheet.create({
  container:{
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    //fontFamily:'Comic Sans MS',
    
  },
});

class CodugueProject extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      <StatusBar
     backgroundColor="white"
     barStyle="light-content"
      />
      <NavigatorIOS
        barTintColor='#191970'
        tintColor='white'
        titleTextColor='white'
        
        style={styles.container}
        initialRoute={{
          title: 'Le Roi Victor',
          component: Main,
          
        }}
      />
      </View>
    );
  }
}



AppRegistry.registerComponent('CodugueProject', () => CodugueProject);
