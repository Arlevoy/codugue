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

const styles = StyleSheet.create({
  mainContainer: {
   
    flex: 1,
    backgroundColor: 'transparent',
    justifyContent: 'center',
  },
  text: {
    flex: 2,
    color:'blue',
  },

  imageContainer: {
       marginTop:63,
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
     
    
  },
  
  image: {
    flex: 1,
    alignSelf: 'center',
    resizeMode:'contain',
    
    
  },
});

class Piece extends React.Component{
    render(){
        return(
            <View style={styles.mainContainer}>
                <View style={styles.imageContainer}>
                <Image 
                source={require('../Data/Pictures/troupe_picture.jpg')}
                style={styles.image}
                
                />
                </View>
               
                <Text style={styles.text}> Text </Text>
            </View>

        );
    }
}


export default Piece;
