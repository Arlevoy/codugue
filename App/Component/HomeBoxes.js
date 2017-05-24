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
import Piece from './Piece';

const styles = StyleSheet.create({
    container: {
        flex: 1,

        backgroundColor: 'transparent',
        borderTopWidth: 2,
        borderColor: 'white',
        justifyContent: 'center',

    },
    subContainer: {
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
        color: 'white',
        backgroundColor: 'transparent',
        fontFamily: 'Bebas Neue',
        flexDirection: 'column',

    },
    image: {
        flex: 1,

        flexDirection: 'column',
        width: null,
        height: null,
        resizeMode: 'stretch',
        justifyContent: 'center',
        alignSelf: 'center',



    },
    textContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        backgroundColor: 'transparent',

    },
});

class HomeBoxes extends React.Component {
    navigateTo() {
        switch (this.props.boxTitle) {
            case 'piece':
                this.props.navigator.push({
                    title: 'Personnages',
                    component: Character,
                });
            case 'troupe':
             this.props.navigator.push({
                    title: 'La Troupe',
                    component: Piece,
                });
            case 'info':

             this.props.navigator.push({
                    title: 'Info&Résa',
                    component: Info,
                });
            default:
                break;
        }
        
    }

    

    render() {
        const boxImage = {
            troupe:
            require('../Data/Pictures/troupe_picture.jpg'),
            piece:
            require('../Data/Pictures/piece_picture.jpg'),
            info:
            require('../Data/Pictures/info_picture.jpg'),

        }

        const boxTitle = {
            troupe: "La Troupe",
            piece: "La Pièce",
            info: "Infos & Résa",
        }
        return (

            <TouchableHighlight
                style={styles.container}
                onPress={this.navigateTo.bind(this)}
                underlayColor='white'
            >
                <View style={styles.subContainer}>
                    <Image
                        source={boxImage[this.props.boxTitle]}
                        style={styles.image}
                    >
                        <View style={styles.textContainer}>
                            <Text
                                style={styles.title}
                            >

                                {boxTitle[this.props.boxTitle]}
                            </Text>
                        </View>
                    </Image>
                </View>

            </TouchableHighlight>




        );
    }
}

HomeBoxes.propTypes = {
    boxTitle: React.PropTypes.string.isRequired,
};

module.exports = HomeBoxes;
