'use strict';

import React, {
    Text,
    View,
    TextInput,
    TouchableHighlight,
    Component,
} from 'react-native';

import Progress from 'react-native-progress';
import buffer from 'buffer';

import styles from './style/auth_menu_style'

class Authorization extends Component {

  constructor(props) {
        super(props);

        this.state = {
            showProgress : false
        }
    }

    render() {
        return (
            <View style={styles.authBox}>
                <View style={styles.title}>
                    <Text style={styles.heading}>Authorization Menu</Text>
                </View>
                <View style={{ flex: 5 }}>
                    <TextInput
                        onChangeText={(text) => this.setState({ username: text })}
                        style={styles.input}
                        placeholder="Login">{}</TextInput>
                    <TextInput
                        onChangeText={(text) => this.setState({ password: text })}
                        style={styles.input}
                        placeholder="Password"
                        secureTextEntry={true}>{}</TextInput>
                    <TouchableHighlight style={styles.button} onPress={this.onLoginPress.bind(this)}>
                        <Text style={ styles.buttonText }>Log In</Text>
                    </TouchableHighlight>
                    <View>{this.state.progressBar}</View>
                </View>
            </View>
        );
    }

    onLoginPress() {
        this.setState({ progressBar: <Progress.Circle size={30}
                                                      indeterminate={true}
                                                      borderWidth={2}
                                                      style={styles.progressBar}/>
        });

        var buf = new buffer.Buffer(this.state.username + ':' + this.state.password);
        var encodedAuth = buf.toString('base64');
        console.log(encodedAuth);
        fetch('https://api.github.com/user', {
            headers: {
                'Authorization':'Basic ' + encodedAuth
            }
        }).
        then((response) => {
            if (response.status >= 200 && response.status < 300) {
                return response
            }
            throw {
                badCredentials: response.status === 401,
                unknownError: response.status !== 401
            }
        }).
        then((response) => response.json()).
        then((results) => {
            console.log(results);
            this.props.navigator.push({
                view_id: 1
            })
          }
        ).
          catch((err) => {this.setState(err); console.log(err)}
        ).
          finally(() => {
                this.setState({ progressBar: null });
            }
        )
    }
}

module.exports = Authorization;
