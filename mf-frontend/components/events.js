'use strict';

import React, {
    AppRegistry,
    Component,
    Image,
    Text,
    View,
    ProgressBarAndroid,
    ListView,
    ScrollView,
    TouchableHighlight
} from 'react-native';

import styles from './style/events_style'

var EventsService = require('./../services/eventsService');
var eventsService = new EventsService();

var Events = React.createClass({
    getInitialState: function() {
        return {
            dataSource: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2
            }),
            loaded : false
        }
    },
    fetchData: function() {
        eventsService.getEvents((events) => {
            this.setState({
                dataSource: this.state.dataSource.cloneWithRows(events),
                loaded : true
            });
        });
    },
    componentDidMount: function() {
        this.fetchData();
    },
    render() {
        if (!this.state.loaded) {
            return this.renderLoadingView();
        }

        return (
            <View style={styles.scrollView}>
                <View style={styles.topContainer} >
                    <TouchableHighlight style={styles.button_left}>
                        <Text style={styles.button_text_left}>Event List</Text>
                    </TouchableHighlight>
                    <TouchableHighlight style={styles.button_right}>
                        <Text style={styles.button_text_right}>Calendar</Text>
                    </TouchableHighlight>
                </View>
                <ScrollView style={styles.scrollViewTop}>
                    <Text style={styles.eventTitle}>Nearest Events</Text>
                    <ListView
                        dataSource={this.state.dataSource}
                        renderRow={this.renderEventList}
                        style={styles.listView}
                    />
                </ScrollView>
            </View>
        )

    },
    renderEventList(event) {
        return (
            <TouchableHighlight
                onPress={() => {
                    this.props.navigator.push({
                    event_id : event.event_id,
                    view_id : 2
                }) }
                }>
                <View style={styles.container}>
                    <Image
                        source={{ uri: eventsService.serverApiBaseUrl + event.photoUrl }}
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
                            {event.type}
                        </Text>
                    </View>
                    <View style={styles.rightContainer}>
                        <Text style={styles.date}>
                            {event.from}
                        </Text>
                        <View style={styles.iconRow}>
                            <Image
                                source={{ uri: eventsService.serverApiBaseUrl + event.photoUrl }}
                                style={styles.icon}
                            />
                            <Image
                                source={{ uri: eventsService.serverApiBaseUrl + event.photoUrl }}
                                style={styles.icon}
                            />
                        </View>
                    </View>
                </View>
            </TouchableHighlight>
        )
    },
    renderLoadingView() {
        return (
            <View style={styles.container}>
                <Text>
                    Loading events...
                </Text>
            </View>
        )
    }
});

module.exports = Events;
