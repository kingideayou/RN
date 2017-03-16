/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

/*
export default class AwesomeProject extends Component {
  render() {

    let picUrl = {
      uri: 'http://7xi8d6.com1.z0.glb.clouddn.com/2017-03-09-17127109_1652837611687612_1425055271046086656_n.jpg'
    };

    return (
      <View style={styles.container}>

        <Image source={picUrl} style={{width: 193, height: 110}} />

        <Text style={styles.welcome}>
          Welcome to React Native !!!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.android.js
        </Text>
        <Text style={styles.instructions}>
          Double tap R on your keyboard to reload,{'\n'}
          Shake or press menu button for dev menu
        </Text>
      </View>
    );
  }
}
*/

//Props(属性)
/*
class Greeting extends Component {
  render() {
    return (
      <Text>Hello {this.props.name}!</Text>
    );
  }
}

export default class AwesomeProject extends Component {
  render() {
    return (
      <View style={{alignItems: 'center'}}>
        <Greeting name='小一' />
        <Greeting name='小二' />
        <Greeting name='小三' />
      </View>
    );
  }
}
*/

// State(状态)
/*
class Blink extends Component {
  constructor(props) {
    super(props);
    this.state = { showText: true};

    //每 1000ms 对 shouwText 状态取反
    setInterval(() => {
      this.setState({ showText: !this.state.showText });
    }, 1000);
  }

  render() {
    let display = this.state.showText ? this.props.text : '';
    return (
      <Text>{display}</Text>
    );
  }
}

export default class AwesomeProject extends Component {
  render() {
    return (
      <View>
          <Blink text='I love to blink' />
          <Blink text='Yes blinking is so great' />
          <Blink text='Why did they ever take this out of HTML' />
          <Blink text='Look at me look at me look at me' />
      </View>
    );
  }
}
*/

//Style 样式
class LotsOfStyles extends Component {
  render() {
    return (
      <View>
        <Text style={styles.red}>just red</Text>
        <Text style={styles.bigblue}>just bigblue</Text>
        <Text style={[styles.bigblue, styles.red]}>bigblue, then red</Text>
        <Text style={[styles.red, styles.bigblue]}>red, then bigblue</Text>
      </View>
    );
  }
}

export default class AwesomeProject extends Component {
  render() {
    return (
        <LotsOfStyles/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
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
  bigblue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
