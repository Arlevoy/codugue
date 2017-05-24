import React, { Component } from 'react';
import {
  Text,
  TouchableHighlight,
  View,
  StyleSheet,
  Image,
} from 'react-native';

const Profile = require('./Profile');
const api = require('../Utils/api');
const CharacterBoxes = require('./CharacterBoxes');

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  //  padding: 30,
    marginTop: 65,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    backgroundColor: 'transparent',
  },
  image: {

    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  title: {
    marginBottom: 20,
    fontSize: 25,
    textAlign: 'center',
    color: 'black',
    fontFamily: 'AmericanTypewriter-Light',
  },
  searchInput: {
    height: 50,
    padding: 4,
    marginRight: 5,
    fontSize: 23,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 8,
    color: 'white',
  },
  buttonText: {
    fontSize: 18,
    color: '#111',
    alignSelf: 'center',
  },
  button: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: '#FFDDCC',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 8,

    alignSelf: 'stretch',
    justifyContent: 'center',
  },
});

class Character extends React.Component{
  goToVictor(){

    this.props.navigator.push({
      title: 'Profile',
      component: Profile,
      passProps: {
        characterName: 'victor',
        characterDescription: 'Ceci est la bio de Victor',
        //characterPicture: './victor_picture.jpg',
      },
    });

  }
  goToMarcel(){

    this.props.navigator.push({
      title: 'Profile',
      component: Profile,
      passProps: {
        characterName: 'marcel',
        characterDescription: 'Ceci est la bio de Victor',

      },
    });

  }


  render() {
    return(
      <View style={styles.mainContainer}>

        <CharacterBoxes
        navigator={this.props.navigator}
        characterName={"marceline"}
        />
        
        <CharacterBoxes
        navigator={this.props.navigator}
        characterName={"marcel"}
        />

        <CharacterBoxes
        navigator={this.props.navigator}
        characterName={"papi"}
        />

        <CharacterBoxes
        navigator={this.props.navigator}
        characterName={"pilon"}
        />

        <CharacterBoxes
        navigator={this.props.navigator}
        characterName={"victorine"}
        />

        <CharacterBoxes
        navigator={this.props.navigator}
        characterName={"victor"}
        />
      </View>

    );
  }
}

export default Character;
