'use strict';

/*eslint-disable no-unused-vars*/

import React, {
  AppRegistry,
  Component,
  Image,
  Text,
  View,
  ProgressBarAndroid,
  ListView,
  Navigator
} from 'react-native';

import Events from './components/events';
import EventDetails from './components/event_details';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import FacebookTabBar from './components/FacebookTabBar';
import Icon from 'react-native-vector-icons/Ionicons';
import CalendarPicker from 'react-native-calendar-picker';
import AuthorizationMenu from './components/auth_menu';

/*eslint-enable no-unused-vars*/

var NewProject = React.createClass({

    getInitialState: function() {
        return {
            date: new Date(),
            eventArray: [0, 1, 2, 6, 8]
        };
    },
    onDateChange: function(date) {
        this.setState({ date: date });
    },

    _renderScene(route, navigator) {
     if (route.view_id === 0) {
         return <AuthorizationMenu navigator={navigator}/>
     } else if (route.view_id === 1) {
         return <Events navigator={navigator}/>
     } else if (route.view_id === 2) {
         return <EventDetails navigator={navigator} event_id={route.event_id}/>
     }
  },
  render : function() {
      return (

           <ScrollableTabView tabBarPosition={"bottom"} renderTabBar={() => <FacebookTabBar someProp={'here'} />}>
              <Navigator tabLabel="bag"
                  initialRoute={{ view_id: 0 }}
                  renderScene={this._renderScene}
              />
              <Text tabLabel="ios-world" >t</Text>
              <Text tabLabel="alert" >t</Text>
              <Text tabLabel="android-apps" >t</Text>
              <CalendarPicker tabLabel="android-walk"
                  selectedDate={this.state.date}
                  onDateChange={this.onDateChange}
                  eventDays={this.state.eventArray}
              />
           </ScrollableTabView>
      )
    }
});

AppRegistry.registerComponent('NewProject', () => NewProject);
