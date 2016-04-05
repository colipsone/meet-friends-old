'use strict';

var icon = "http://ndl.mgccw.com/mu3/app/20150810/04/1439162148803/icon/icon_xl.png";
var icon2 = "https://cdn3.iconfinder.com/data/icons/google-material-design-icons/48/ic_arrow_back_48px-128.png";
var MOKED_DATA = [
    {event_id: 1, userName:'BordyArt(Artyom)', title: 'My Happy Birdthday', description: 'Lets pray in church together', partyType: 'Party', date: 'Today 22:00', favorite: 'true', userImage: {thumbnail:'http://i.imgur.com/UePbdph.jpg', starIcon:'http://files.softicons.com/download/internet-cons/emotion-icons-by-yellow-icon/png/128/star.png'}},
    {event_id: 2, userName:'Yegor Babosiuk', title: 'Party na hate', description: 'I want some crazy party with girls', partyType: 'Party', date: 'Tommorow 20:00', favorite: 'true', userImage: {thumbnail:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNaRRe4I7cwuC12R0zkUNP71rpA7vqwVvR5yDkXWyoA_1d8tyd9A', starIcon:'http://files.softicons.com/download/internet-cons/emotion-icons-by-yellow-icon/png/128/star.png'}},
    {event_id: 3, userName:'Kolya', title: 'Play games with friendsy', description: 'Lets play mortal combat', partyType: 'Games', date: '25.09.2016', favorite: 'true', userImage: {thumbnail:'http://ndl.mgccw.com/mu3/app/20150810/04/1439162148803/icon/icon_xl.png', starIcon:'http://files.softicons.com/download/internet-cons/emotion-icons-by-yellow-icon/png/128/star.png'}},
    {event_id: 4, userName:'BordyArt(Artyom)', title: 'My Happy Birdthday', description: 'Lets pray in church together', partyType: 'Party', date: 'Today 22:00', favorite: 'true', userImage: {thumbnail:'http://i.imgur.com/UePbdph.jpg', starIcon:'http://files.softicons.com/download/internet-cons/emotion-icons-by-yellow-icon/png/128/star.png'}},
    {event_id: 5, userName:'Yegor Babosiuk', title: 'Party na hate', description: 'I want some crazy party with girls', partyType: 'Party', date: 'Tommorow 20:00', favorite: 'true', userImage: {thumbnail:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNaRRe4I7cwuC12R0zkUNP71rpA7vqwVvR5yDkXWyoA_1d8tyd9A', starIcon:'http://files.softicons.com/download/internet-cons/emotion-icons-by-yellow-icon/png/128/star.png'}},
    {event_id: 6, userName:'Kolya', title: 'Play games with friendsy', description: 'Lets play mortal combat', partyType: 'Games', date: '25.09.2016', favorite: 'true', userImage: {thumbnail:'http://ndl.mgccw.com/mu3/app/20150810/04/1439162148803/icon/icon_xl.png', starIcon:'http://files.softicons.com/download/internet-cons/emotion-icons-by-yellow-icon/png/128/star.png'}},
    {event_id: 7, userName:'BordyArt(Artyom)', title: 'My Happy Birdthday', description: 'Lets pray in church together', partyType: 'Party', date: 'Today 22:00', favorite: 'true', userImage: {thumbnail:'http://i.imgur.com/UePbdph.jpg', starIcon:'http://files.softicons.com/download/internet-cons/emotion-icons-by-yellow-icon/png/128/star.png'}},
    {event_id: 8, userName:'Yegor Babosiuk', title: 'Party na hate', description: 'I want some crazy party with girls', partyType: 'Party', date: 'Tommorow 20:00', favorite: 'true', userImage: {thumbnail:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNaRRe4I7cwuC12R0zkUNP71rpA7vqwVvR5yDkXWyoA_1d8tyd9A', starIcon:'http://files.softicons.com/download/internet-cons/emotion-icons-by-yellow-icon/png/128/star.png'}},
    {event_id: 9, userName:'Kolya', title: 'Play games with friendsy', description: 'Lets play mortal combat', partyType: 'Games', date: '25.09.2016', favorite: 'true', userImage: {thumbnail:'http://ndl.mgccw.com/mu3/app/20150810/04/1439162148803/icon/icon_xl.png', starIcon:'http://files.softicons.com/download/internet-cons/emotion-icons-by-yellow-icon/png/128/star.png'}},
    {event_id: 10, userName:'BordyArt(Artyom)', title: 'My Happy Birdthday', description: 'Lets pray in church together', partyType: 'Party', date: 'Today 22:00', favorite: 'true', userImage: {thumbnail:'http://i.imgur.com/UePbdph.jpg', starIcon:'http://files.softicons.com/download/internet-cons/emotion-icons-by-yellow-icon/png/128/star.png'}},
    {event_id: 11, userName:'Yegor Babosiuk', title: 'Party na hate', description: 'I want some crazy party with girls', partyType: 'Party', date: 'Tommorow 20:00', favorite: 'true', userImage: {thumbnail:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNaRRe4I7cwuC12R0zkUNP71rpA7vqwVvR5yDkXWyoA_1d8tyd9A', starIcon:'http://files.softicons.com/download/internet-cons/emotion-icons-by-yellow-icon/png/128/star.png'}},
    {event_id: 12, userName:'Kolya', title: 'Play games with friendsy', description: 'Lets play mortal combat', partyType: 'Games', date: '25.09.2016', favorite: 'true', userImage: {thumbnail:'http://ndl.mgccw.com/mu3/app/20150810/04/1439162148803/icon/icon_xl.png', starIcon:'http://files.softicons.com/download/internet-cons/emotion-icons-by-yellow-icon/png/128/star.png'}},
    {event_id: 13, userName:'BordyArt(Artyom)', title: 'My Happy Birdthday', description: 'Lets pray in church together', partyType: 'Party', date: 'Today 22:00', favorite: 'true', userImage: {thumbnail:'http://i.imgur.com/UePbdph.jpg', starIcon:'http://files.softicons.com/download/internet-cons/emotion-icons-by-yellow-icon/png/128/star.png'}},
    {event_id: 14, userName:'Yegor Babosiuk', title: 'Party na hate', description: 'I want some crazy party with girls', partyType: 'Party', date: 'Tommorow 20:00', favorite: 'true', userImage: {thumbnail:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNaRRe4I7cwuC12R0zkUNP71rpA7vqwVvR5yDkXWyoA_1d8tyd9A', starIcon:'http://files.softicons.com/download/internet-cons/emotion-icons-by-yellow-icon/png/128/star.png'}},
    {event_id: 15, userName:'Kolya', title: 'Play games with friendsy', description: 'Lets play mortal combat', partyType: 'Games', date: '25.09.2016', favorite: 'true', userImage: {thumbnail:'http://ndl.mgccw.com/mu3/app/20150810/04/1439162148803/icon/icon_xl.png', starIcon:'http://files.softicons.com/download/internet-cons/emotion-icons-by-yellow-icon/png/128/star.png'}},
    {event_id: 16, userName:'BordyArt(Artyom)', title: 'My Happy Birdthday', description: 'Lets pray in church together', partyType: 'Party', date: 'Today 22:00', favorite: 'true', userImage: {thumbnail:'http://i.imgur.com/UePbdph.jpg', starIcon:'http://files.softicons.com/download/internet-cons/emotion-icons-by-yellow-icon/png/128/star.png'}},
    {event_id: 17, userName:'Yegor Babosiuk', title: 'Party na hate', description: 'I want some crazy party with girls', partyType: 'Party', date: 'Tommorow 20:00', favorite: 'true', userImage: {thumbnail:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNaRRe4I7cwuC12R0zkUNP71rpA7vqwVvR5yDkXWyoA_1d8tyd9A', starIcon:'http://files.softicons.com/download/internet-cons/emotion-icons-by-yellow-icon/png/128/star.png'}},
    {event_id: 18, userName:'Kolya', title: 'Play games with friendsy', description: 'Lets play mortal combat', partyType: 'Games', date: '25.09.2016', favorite: 'true', userImage: {thumbnail:'http://ndl.mgccw.com/mu3/app/20150810/04/1439162148803/icon/icon_xl.png', starIcon:'http://files.softicons.com/download/internet-cons/emotion-icons-by-yellow-icon/png/128/star.png'}},
];

import React, {
    AppRegistry,
    Component,
    Image,
    StyleSheet,
    Text,
    View,
    ProgressBarAndroid,
    ListView,
    ScrollView,
    TouchableHighlight
} from 'react-native';

import styles from './style/event_details_style'

var EventDetails = React.createClass({
    getInitialState() {
        return {
            description: MOKED_DATA[this.props.event_id - 1].description
        }
    },

    _handlePress() {
        this.props.navigator.pop();
    },

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.topMenu}>
                    <Text>{this.props.event_id}</Text>
                    <Image
                        source={{ uri: MOKED_DATA[this.props.event_id - 1].userImage.thumbnail }}
                        style={styles.thumbnail}
                    />
                    <Text style={styles.userName}>{MOKED_DATA[this.props.event_id - 1].userName}</Text>
                    <View style={styles.iconRow}>
                        <Image
                            source={{ uri: MOKED_DATA[this.props.event_id - 1].userImage.starIcon }}
                            style={styles.icon}
                        />
                        <Image
                            source={{ uri: icon }}
                            style={styles.icon}
                        />
                        <TouchableHighlight onPress={this._handlePress}>
                            <Image
                                source={{ uri: icon2 }}
                                style={styles.icon}
                            />
                        </TouchableHighlight>
                    </View>
                </View>
                <View style={styles.info}>
                    <Text style={styles.label}>EVENT NAME</Text>
                    <Text style={styles.basicText}>{MOKED_DATA[this.props.event_id - 1].title}</Text>
                    <Text style={styles.label}>TIME</Text>
                    <Text style={styles.basicText}>{MOKED_DATA[this.props.event_id - 1].date}</Text>
                    <Text style={styles.label}>DESCRIPTION</Text>
                    <Text style={styles.description}>{this.state.description}</Text>
                </View>
                <View style={styles.singed}>
                    <Text style={styles.label}>SINGED IN</Text>
                    <Image
                        source={{ uri: icon }}
                        style={styles.thumbnail}
                    />
                </View>
            </View>
        )
    }
});

module.exports = EventDetails;