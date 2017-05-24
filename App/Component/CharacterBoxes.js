import React, { Component } from 'react';


import {
  Text,
  TouchableHighlight,
  View,
  StyleSheet,
  Image,
} from 'react-native';

import Character from './Character';
import Info from './Info';
import Profile from './Profile';

const styles = StyleSheet.create({
  container : {
    flex: 1,
    
    backgroundColor: 'transparent',
    borderTopWidth: 2,
    borderColor:'white',
    justifyContent: 'center',
    
  },
  subContainer : {
    flex: 1,
    
    flexDirection: 'row',
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,  
  },
  title: {
    fontSize: 23,
    fontWeight: '400',
    //color: 'white',
    backgroundColor: 'transparent',
    fontFamily: 'Bebas Neue',
    flexDirection: 'column',

  },
  image:{
    flex: 1,
    
    flexDirection: 'column',
    width: null,
    height: null,
    resizeMode: 'stretch',
    justifyContent:'center',
    alignSelf:'center',
    
    
    
  },
  textContainer:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    alignSelf:'center',
    backgroundColor: 'transparent',

  },
});

class CharacterBoxes extends React.Component{
   goToCharacterProfile(){

    this.props.navigator.push({
      title: 'Profile',
      component: Profile,
      passProps: {
        characterName: this.props.characterName,
      },
    });

  }

  render() {
    const boxImage = {
        marcel:
        require('../Data/Pictures/marcel_picture.jpg'),
        piece:
        require('../Data/Pictures/piece_picture.jpg'),
        info:
        require('../Data/Pictures/info_picture.jpg'),
    }

    const characterName = {
        marcel: "Marcel",
        victor: "Victor",
        victorine: "Victorine",
        marceline: "Marceline",
        pilon: "Pilon",
        papi: "Papi",
    }

    


    return(
        
                <TouchableHighlight
                  style={styles.container}
                  onPress={this.goToCharacterProfile.bind(this)}
                  underlayColor='white'
                  >
                    <View style={styles.subContainer}>
                      
                        <View style={styles.textContainer}>
                          <Text
                            style={styles.title}
                          >
                            {characterName[this.props.characterName]}
                          </Text>
                          </View>
                        
                      </View>

                  </TouchableHighlight>


          

    );
  }
}

CharacterBoxes.propTypes = {
  characterName: React.PropTypes.string.isRequired,
};

module.exports = CharacterBoxes;
