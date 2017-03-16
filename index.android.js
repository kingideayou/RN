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
  Image,
  TextInput,
  ScrollView,
  ListView,
  ToastAndroid,
  Dimensions
} from 'react-native';
import ApiUtils from './ApiUtils'

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
/*
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
*/

// width、height & flex
/*
class FixedDimensionsBasics extends Component {
  render() {
    return (
      // width height
      // <View>
      //     <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
      //     <View style={{width: 100, height: 100, backgroundColor: 'skyblue'}} />
      //     <View style={{width: 150, height: 150, backgroundColor: 'steelblue'}} />
      // </View>

      //flex
      // 试试去掉父View中的`flex: 1`。
      // 则父View不再具有尺寸，因此子组件也无法再撑开。
      // 然后再用`height: 300`来代替父View的`flex: 1`试试看？
      <View style={{flex: 1}}>
        <View style={{flex:1, backgroundColor: 'powderblue'}} />
        <View style={{flex:2, backgroundColor: 'skyblue'}} />
        <View style={{flex:3, backgroundColor: 'steelblue'}} />
      </View>
    );
  }
}
*/

//FlexDirection
class FlexDirectionBasics extends Component {
  render() {
    return (
      // 尝试把`flexDirection`改为`column`看看
      <View style={{flex: 1, flexDirection: 'row'}}>
        <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
      </View>
    );
  }
}

//Justify Content
class JustifyContentBasics extends Component {
  render() {
    return (
      // 尝试把`justifyContent`改为`center`看看
      // 尝试把`flexDirection`改为`row`看看
      <View style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}>
        <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
      </View>
    );
  }
}

//Align Items#
class AlignItemsBasics extends Component {
  render() {
    return (
      // 尝试把`alignItems`改为`flex-start`看看
      // 尝试把`justifyContent`改为`flex-end`看看
      // 尝试把`flexDirection`改为`row`看看
      <View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
      </View>
    );
  }
}

//Input
class PizzaTranslator extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }
  render() {
    return (
      <View style={{padding: 10}}>
        <TextInput
          style={{height: 40}}
          placeholder="Type here to translate!"
          onChangeText={(text) => this.setState({text})}
          />
        <Text style={{padding: 10, fontSize: 42}}>
          //aa && bb 如结果为true，则返回 aa，否则返回 bb。
          {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
        </Text>
      </View>
    );
  }
}

// ScrollView
class IScrolledDownAndWhatHappenedNextShockedMe extends Component {
  render() {
      return(
        <ScrollView>
          <Text style={{fontSize:96}}>Scroll me plz</Text>
          <Image source={require('./img/favicon.png')} />
          <Image source={require('./img/favicon.png')} />
          <Image source={require('./img/favicon.png')} />
          <Image source={require('./img/favicon.png')} />
          <Image source={require('./img/favicon.png')} />
          <Text style={{fontSize:96}}>If you like</Text>
          <Image source={require('./img/favicon.png')} />
          <Image source={require('./img/favicon.png')} />
          <Image source={require('./img/favicon.png')} />
          <Image source={require('./img/favicon.png')} />
          <Image source={require('./img/favicon.png')} />
          <Text style={{fontSize:96}}>Scrolling down</Text>
          <Image source={require('./img/favicon.png')} />
          <Image source={require('./img/favicon.png')} />
          <Image source={require('./img/favicon.png')} />
          <Image source={require('./img/favicon.png')} />
          <Image source={require('./img/favicon.png')} />
          <Text style={{fontSize:96}}>What's the best</Text>
          <Image source={require('./img/favicon.png')} />
          <Image source={require('./img/favicon.png')} />
          <Image source={require('./img/favicon.png')} />
          <Image source={require('./img/favicon.png')} />
          <Image source={require('./img/favicon.png')} />
          <Text style={{fontSize:96}}>Framework around?</Text>
          <Image source={require('./img/favicon.png')} />
          <Image source={require('./img/favicon.png')} />
          <Image source={require('./img/favicon.png')} />
          <Image source={require('./img/favicon.png')} />
          <Image source={require('./img/favicon.png')} />
          <Text style={{fontSize:80}}>React Native</Text>
        </ScrollView>
      );
  }
}

class ListViewBasics extends Component {
  //初始化数据
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows([
        'John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin',
        'John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin',
        'John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin',
        'John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin'
      ])
    }
  }

  render() {
    return (
      <View style={{flex: 1, paddingTop: 22}}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => <Text style={{fontSize: 30}}>{rowData}</Text>}
          />
      </View>
    );
  }
}

const windowWidth = Dimensions.get('window').width;
export default class AwesomeProject extends Component {

  //js组件的构造函数，js的生命周期
  constructor(props) {
      super(props);
      //state内部维护的一个状态，我们刚开始进来的为空，来加载空的view
      this.state = {
          dataSource: new ListView.DataSource({
              rowHasChanged: (row1, row2) => row1 !== row2,
          }),
          //是否已经加载
          loaded: false
      };

  }
  //初始化时执行
    componentDidMount() {
        this.getEntriesFromApiAsync();
    }

  getEntriesFromApiAsync() {
      // fetch('https://raw.githubusercontent.com/facebook/react-native/master/docs/MoviesExample.json')
      fetch('http://v3.wufazhuce.com:8000/api/hp/bymonth/' + new Date())
        .then((response) => response.json())
        .then((responseData) => {
          this.setState({
            //将获取到的数据赋值给dataSource
            dataSource: this.state.dataSource.cloneWithRows(responseData.data),
            //标记已经加载成功完毕
            loaded: true
          });
        })
        .done();
    }


  //获取到数据加载到listview控件上显示
  renderMovie(entry) {
      return (
          <View style={styles.container}>
              <Image
                  source={{uri: entry.hp_img_url}}
                  style={styles.thumbnail}
              />
              <View style={styles.rightContainer}>
                  <Text style={styles.title}>{entry.hp_content}</Text>
                  <Text style={styles.year}>{entry.hp_author}</Text>
              </View>
          </View>
      );
    }

  render() {
    return (
      //Style
        // <LotsOfStyles/>

        //FixedDimensions
        // <FixedDimensionsBasics/>

        //FlexDirection
        // <FlexDirectionBasics/>

        // <JustifyContentBasics/>

        // <AlignItemsBasics/>

        //<PizzaTranslator/>

        // <IScrolledDownAndWhatHappenedNextShockedMe/>

        // <ListViewBasics/>

        <View>
          <ListView
                //设置ListView的数据源
                dataSource={this.state.dataSource}
                //listview的回调方法
                renderRow={this.renderMovie}
            />

        </View>
        //监听滑动到底部的方法
        //onEndReached={()=> {this.fetchData()}}
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
  title: {
      fontSize: 22,
      textAlign: 'center',
      padding: 20
  },
  year: {
      textAlign: 'center',
      paddingBottom: 20,
      fontSize: 18,
  },
  rightContainer: {
      flex: 1,
  },
  thumbnail: {
      width: windowWidth,
      height: windowWidth * 0.5
  },
  listView: {
      paddingTop: 20,
      backgroundColor: '#F5FCFF',
  },
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
