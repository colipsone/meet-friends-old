/**
 * Created by Egoist on 16.02.2016.
 */
'use strict';

var MOKED_DATA = [
    {userName:'BordyArt(Artyom)', title: 'My Happy Birdthday', description: 'Lets pray in church together', partyType: 'Party', date: 'Today 22:00', favorite: 'true', userImage: {thumbnail:'http://i.imgur.com/UePbdph.jpg'}},
    {userName:'Yegor Babosiuk', title: 'Party na hate', description: 'I want some crazy party with girls', partyType: 'Party', date: 'Tommorow 20:00', favorite: 'true', userImage: {thumbnail:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNaRRe4I7cwuC12R0zkUNP71rpA7vqwVvR5yDkXWyoA_1d8tyd9A'}},
    {userName:'Kolya', title: 'Play games with friendsy', description: 'Lets play mortal combat', partyType: 'Games', date: '25.09.2016', favorite: 'true', userImage: {thumbnail:'http://ndl.mgccw.com/mu3/app/20150810/04/1439162148803/icon/icon_xl.png'}},
    {userName:'BordyArt(Artyom)', title: 'My Happy Birdthday', description: 'Lets pray in church together', partyType: 'Party', date: 'Today 22:00', favorite: 'true', userImage: {thumbnail:'http://i.imgur.com/UePbdph.jpg'}},
    {userName:'Yegor Babosiuk', title: 'Party na hate', description: 'I want some crazy party with girls', partyType: 'Party', date: 'Tommorow 20:00', favorite: 'true', userImage: {thumbnail:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNaRRe4I7cwuC12R0zkUNP71rpA7vqwVvR5yDkXWyoA_1d8tyd9A'}},
    {userName:'Kolya', title: 'Play games with friendsy', description: 'Lets play mortal combat', partyType: 'Games', date: '25.09.2016', favorite: 'true', userImage: {thumbnail:'http://ndl.mgccw.com/mu3/app/20150810/04/1439162148803/icon/icon_xl.png'}},
    {userName:'BordyArt(Artyom)', title: 'My Happy Birdthday', description: 'Lets pray in church together', partyType: 'Party', date: 'Today 22:00', favorite: 'true', userImage: {thumbnail:'http://i.imgur.com/UePbdph.jpg'}},
    {userName:'Yegor Babosiuk', title: 'Party na hate', description: 'I want some crazy party with girls', partyType: 'Party', date: 'Tommorow 20:00', favorite: 'true', userImage: {thumbnail:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNaRRe4I7cwuC12R0zkUNP71rpA7vqwVvR5yDkXWyoA_1d8tyd9A'}},
    {userName:'Kolya', title: 'Play games with friendsy', description: 'Lets play mortal combat', partyType: 'Games', date: '25.09.2016', favorite: 'true', userImage: {thumbnail:'http://ndl.mgccw.com/mu3/app/20150810/04/1439162148803/icon/icon_xl.png'}},

];
var REQUEST_URL = 'https://raw.githubusercontent.com/facebook/react-native/master/docs/MoviesExample.json';

import React, {
    AppRegistry,
    Component,
    Image,
    StyleSheet,
    Text,
    View,
    ProgressBarAndroid,
    ListView
} from 'react-native';

var Events = new React.createClass({
    getInitialState: function() {
        return {
            dataSource: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2
            }),
            loaded : false
        }
    },
    fetchData: function() {
        //fetch(REQUEST_URL)
        //    .then((response) => response.json())
        //    .then((responseData) => {
        //        this.setState({
        //            dataSource: this.state.dataSource.cloneWithRows(responseData.movies),
        //            loaded : true
        //        }).done();
        //    })
        this.setState({
            dataSource: this.state.dataSource.cloneWithRows(MOKED_DATA),
            loaded : true
        })
    },
    componentDidMount: function() {
        this.fetchData();
    },
    render() {
        if (!this.state.loaded) {
            return this.renderLoadingView();
        }

        return (
            <ListView
                dataSource={this.state.dataSource}
                renderRow={this.renderEventList}
                style={styles.listView}
            />
        )
            ;
    },
    renderEventList(event) {
        return (
            <View style={styles.container}>
                <Image
                    source={{uri: event.userImage.thumbnail}}
                    style={styles.thumbnail}
                />
                <View style={styles.leftContainer}>
                    <Text style={styles.userName}>
                        {event.userName}
                    </Text>
                    <Text style={styles.title}>
                        {event.title}
                    </Text>
                    <Text style={styles.description}>
                        {event.description}
                    </Text>

                    <Text style={styles.partyType}>
                        {event.partyType}
                    </Text>
                </View>
                <View style={styles.rightContainer}>
                    <Text style={styles.date}>
                        {event.date}
                    </Text>
                    <View style={styles.iconRow}>
                        <Image
                            source={{uri: event.userImage.thumbnail}}
                            style={styles.icon}
                        />
                        <Image
                            source={{uri: event.userImage.thumbnail}}
                            style={styles.icon}
                        />
                    </View>
                </View>

            </View>
        )
    },
    renderLoadingView() {
        return(
            <View style={styles.container}>
                <Text>
                    Loading events...
                </Text>
            </View>
        )
    }
});

const styles = StyleSheet.create({
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
        marginLeft: 10,
    },
    iconRow : {
        flex: 1,
        flexDirection: 'row',
    },
    rightContainer : {
        flex: 1
    }

});

module.exports = Events