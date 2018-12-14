import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Config from 'react-native-config';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    const partner = Config.PARTNER
    const secret = Config.SECRET
    return (
      <View style={styles.container}>
        <Text style={styles.welcome} >{partner}'s App!</Text>
        <Text style={styles.welcome} >Their secret is {secret}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Config.COLOR,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
