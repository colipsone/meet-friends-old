'use strict';

import React, {
    StyleSheet
} from 'react-native';

module.exports = StyleSheet.create({
        button: {
            backgroundColor: '#e9eaed',
            height: 50,
            alignSelf: 'stretch',
            justifyContent : 'center',
            marginTop: 10
        },
        buttonText: {
            fontSize: 20,
            alignSelf: 'center'
        },
        heading: {
            fontSize : 30
        },
        input: {
            height: 50,
            marginTop: 1
        },
        title: {
            flex: 2,
            alignItems: 'center',
            justifyContent: 'center'
        },
        authBox: {
            flex:1,
            padding: 30
        },
        progressBar: {
            alignItems : 'center',
            padding: 10
        }
    }
);

