import React, { Component } from 'react';
//import FitImage from 'react-native-fit-image';

import {
  Text,
  TouchableHighlight,
  View,
  StyleSheet,
  Image,
} from 'react-native';

const Character = require('./Character');
const HomeBoxes=require('./HomeBoxes');

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    marginTop: 60,
    flexDirection: 'column',
    backgroundColor: 'transparent',
  },
});

class Main extends React.Component{
 

  render() {
    return(
      <View style={styles.mainContainer}>

        <HomeBoxes 
        navigator={this.props.navigator}
        boxTitle={"troupe"}
        />
        
        <HomeBoxes 
        navigator={this.props.navigator}
        boxTitle={"piece"}
        />

        <HomeBoxes 
        navigator={this.props.navigator}
        boxTitle={"info"}
        />
      </View>
      

    );
  }
}

module.exports = Main;
