var MOKED_MOVIES_DATA = [
    {title: 'Title', year: '2015', posters: {thumbnail:'http://i.imgur.com/UePbdph.jpg'}}
];
var REQUEST_URL = 'https://raw.githubusercontent.com/facebook/react-native/master/docs/MoviesExample.json';
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
  AppRegistry,
  Component,
  Image,
  StyleSheet,
  Text,
  View,
  ProgressBarAndroid,
  ListView,
  Navigator
} from 'react-native';

var Events = require('./events');
var EventDetails = require('./event_details');

var NewProject = React.createClass({

  _renderScene(route, navigator) {
     if (route.view_id === 1) {
         return <Events navigator={navigator}/>
     } else if (route.view_id === 2) {
         return <EventDetails navigator={navigator} event_id={route.event_id}/>
     }
  },
  render : function() {
      return (
          <Navigator
            initialRoute={{view_id: 1}}
            renderScene={this._renderScene}
          />
          //<Events />
          //<EventDetails />
      )
    }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  spinner: {
      opacity: 1
  },
  thumbnail: {
      width: 53,
      height: 81
  },
    rightContainer: {
        flex: 1
    },
    title: {
        fontSize: 20,
        marginBottom: 8,
        textAlign: 'center'
    },
    year: {
        textAlign: 'center'
    }
});

AppRegistry.registerComponent('NewProject', () => NewProject);
