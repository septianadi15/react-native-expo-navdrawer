import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet
} from 'react-native';

export default class Screen2 extends Component {
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.teks}>
                    Menu Screen 2
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        paddingTop: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    teks: {
        fontSize: 24,
        fontStyle: 'italic',
        color: 'black'
    }
})