import React, { Component } from 'react';
import {
  Text,
  TouchableHighlight,
  View,
  StyleSheet,
  Image,
  ScrollView,
  ListView,
} from 'react-native';

const Badge = require('./Badge.js');
const api = require('../Utils/api');
const Separator = require('./Helpers/Separator');

const styles = StyleSheet.create({
  container: {
    flex: 1,

    //justifyContent: 'center',
  },
  buttonText: {
    fontSize: 18,
    color: 'black',
    alignSelf: 'center',
    justifyContent: 'center',
  //  backgroundColor: '#48BBEC'
  },
  rowContainer: {
    flex: 1,
    padding: 10,
  },
  rowTitle: {
    flex: 1,
    //color: '#48BBEC',
    fontSize: 16,

  },
  rowContent: {
    fontSize: 19,
  },
});

class Profile extends React.Component{

  render(){
    const characterBio = {
      victor:
    require('../Data/Bio/victor.json'),
      marcel:
    require('../Data/Bio/marcel.json'),
    };

    const topicArr = ['Prénom', 'Citation'];
    const list = topicArr.map((item, index) => {
      if(!characterBio[this.props.characterName][item]){
        return <View key={index}/>;
      } else {
        return (
                <View key={index}>
                    <View style={styles.rowContainer}>
                        <Text style={styles.rowTitle}> {item} </Text>
                        <Text style={styles.rowContent}> {characterBio[this.props.characterName][item]} </Text>
                    </View>
                    <Separator />
                </View>

        );
      }
    });
    return(
      <ScrollView style={styles.container}>
        <Badge
          characterName={this.props.characterName}
          characterPicture={this.props.characterPicture}
        />
        {list}
      </ScrollView>
    );
  }
}

Profile.propTypes = {
  characterName: React.PropTypes.string.isRequired,
};

export default Profile;
