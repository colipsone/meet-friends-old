'use strict';

import React, {
    StyleSheet
} from 'react-native';

module.exports = StyleSheet.create({
    topMenu : {
        backgroundColor: '#ffffff',
        flex : 1,
        flexDirection: 'row',
        borderBottomWidth : 1,
        borderColor : '#d4d4d4'

    },
    info : {
        flex : 4,
        backgroundColor: '#ffffff',
        paddingLeft : 40,
        paddingTop : 40,
        paddingRight: 40
    },
    singed : {
        flex : 2,
        backgroundColor: '#ffffff',
        paddingLeft : 40,
        paddingTop : 40,
        paddingRight: 40
    },
    container : {
        flex : 1
    },
    thumbnail: {
        width: 50,
        height: 50,
        borderRadius: 30,
        marginLeft : 10,
        marginTop : 10
    },
    icon : {
        width: 20,
        height: 20,
        marginTop: 30,
        marginLeft: 20
    },
    iconRow : {
        flexDirection: 'row',
        flex : 1
    },
    userName: {
        flex:1,
        textAlign: 'center',
        marginTop: 20,
        marginLeft: 10,
        fontWeight: 'bold',
        fontSize: 14,
        color: '#424242'
    },
    label: {
        fontSize: 11,
        textAlign: 'left',
        marginLeft: 10,
        marginTop: 15,
        color: '#464646'
    },
    basicText: {
        fontSize: 11,
        textAlign: 'left',
        marginLeft: 10,
        marginTop: 5,
        color: '#464646'
    },
    description: {
        fontSize: 11,
        textAlign: 'left',
        marginLeft: 10,
        marginTop: 5,
        color: '#464646',
        backgroundColor: '#f1f1f1'
    }
});