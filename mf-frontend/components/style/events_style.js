'use strict';

import React, {
    StyleSheet
} from 'react-native';

module.exports = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        borderWidth: 1,
        borderColor: '#d4d4d4'
    },
    spinner: {
        opacity: 1
    },
    thumbnail: {
        width: 50,
        height: 50,
        borderRadius: 30
    },
    leftContainer: {
        flex: 4
    },
    userName: {
        textAlign: 'left',
        marginTop: 10,
        marginLeft: 10,
        fontWeight: 'bold',
        fontSize: 14,
        color: "#424242"
    },
    title: {
        fontSize: 13,
        textAlign: 'left',
        marginLeft: 10,
        marginTop: 5,
        color: "#464646"
    },
    date: {
        fontSize: 9,
        textAlignVertical : 'top',
        marginRight : 10
    },
    description: {
        fontSize: 11,
        textAlign: 'left',
        marginLeft: 10,
        marginTop: 5,
        color: "#464646"
    },
    partyType: {
        fontStyle: 'italic',
        fontSize: 11,
        textAlign: 'left',
        marginLeft: 10,
        marginTop: 5,
        marginBottom: 5
    },
    icon : {
        width: 15,
        height: 15,
        borderRadius: 30,
        marginTop: 10,
        marginLeft: 10
    },
    iconRow : {
        flex: 1,
        flexDirection: 'row'
    },
    rightContainer : {
        flex: 1
    },
    eventTitle : {
        backgroundColor: '#f1f1f1',
        textAlign : 'center',
        fontSize: 30,
        color: "#464646"
    },
    topContainer : {
        marginTop: 10,
        marginLeft : 20,
        marginBottom : 10,
        marginRight : 20,
        height:30,
        flexDirection: 'row'
    },
    button_right : {
        backgroundColor: '#f7f7f7',
        flex: 1,
        borderRadius: 4,
        paddingTop: 5
    },
    button_left : {
        backgroundColor: '#0aa494',
        flex: 1,
        borderRadius: 4,
        paddingTop: 5
    },
    button_text_left : {
        textAlign : 'center',
        color : 'white'
    },
    button_text_right : {
        textAlign : 'center'
    },
    scrollViewTop : {
    },
    scrollView : {
        flex : 1,
        backgroundColor: '#0aa494'
    }

});