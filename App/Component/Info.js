import React, { Component } from 'react';
import MapView, {Marker} from 'react-native-maps';



import {
  Text,
  TouchableHighlight,
  View,
  StyleSheet,
  Image,
} from 'react-native';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    marginTop: 60,
    flexDirection: 'column',
    backgroundColor: 'transparent',
  },

  mapContainer:{
      flex:1,
  },

  textContainer:{
      flex:2,
  },
  marker: {
    backgroundColor: "#550bbc",
    padding: 5,
    borderRadius: 5,
  },
});

class Info extends Component{
    render(){

    const markers = [
            {
                latitude: 48.8269986,
                longitude: 2.3136804000000666,
                title: 'Foo Place',
                subtitle: '1234 Foo Drive'
            }
];
        return(
                <View
                style={styles.mainContainer}>
                    <MapView
                        style={styles.mapContainer}
                        initialRegion={{
                        latitude: 48.8269986,
                        longitude: 2.3136804000000666,
                        latitudeDelta: 0.002,
                        longitudeDelta: 0.001,
                        }}>
                            <Marker {...coordinate={
                latitude: 48.8269986,
                longitude: 2.3136804000000666,
                }} >
                            <View style={styles.marker}>
                            <Text >MPAA</Text>
                            </View>
                            </Marker>
                        </MapView>
                    <Text style={styles.textContainer}> Bonjour </Text>
                </View>

        );

    }
}

export default Info;