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
  ListView,
  ToastAndroid,
  Dimensions,
  TouchableOpacity,
  Navigator,
  TouchableHighlight
} from 'react-native';
import OneDetailPage from './OneDetailPage';

const windowWidth = Dimensions.get('window').width;
var date = new Date()
export default class OneListPage extends Component {

  //js组件的构造函数，js的生命周期
  constructor(props) {
      super(props);
      //state内部维护的一个状态，我们刚开始进来的为空，来加载空的view
      this.state = {
          dataSource: new ListView.DataSource({
              rowHasChanged: (row1, row2) => row1 !== row2,
          }),
          //是否已经加载
          loading: false
      };
      this.tempData = [];
      // this.pressButton = this._pressButton.bind(this);
  }

  //初始化时执行
    componentDidMount() {
        date.setDate(1);
        this.getEntriesFromApiAsync(date);
    }

  getEntriesFromApiAsync(date) {
    loading: true
      // fetch('https://raw.githubusercontent.com/facebook/react-native/master/docs/MoviesExample.json')
      fetch('http://v3.wufazhuce.com:8000/api/hp/bymonth/' + date)
        .then((response) => response.json())
        .then((responseData) => {
          this.tempData = this.tempData.concat(responseData.data);
          this.setState({
            //将获取到的数据赋值给dataSource
            dataSource: this.state.dataSource.cloneWithRows(this.tempData),
            loading: false
          });
        })
        .done();
    }

    _pressButton(entryUrl){
      const { navigator } = this.props;
      //为什么这里可以取得 props.navigator?请看上文:
      //<Component {...route.params} navigator={navigator} />
      //这里传递了navigator作为props
      if(navigator) {
          navigator.push({
              name: 'OneDetailPage',
              component: OneDetailPage,
              params: {
                url: entryUrl
              }
          })
      }
    }

  //获取到数据加载到listview控件上显示
  renderEntry(entry) {
      return (
        <TouchableHighlight
          onPress={() =>
              this._pressButton(entry.web_url)
            }>
          <View style={styles.container}>
              <Image
                  source={{uri: entry.hp_img_url}}
                  style={styles.thumbnail}
              />
              <View style={styles.bottomContainer}>
                  <Text style={styles.content} allowFontScaling={false}>{entry.hp_content}</Text>
                    <View style={{
                        flex: 1,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center'}}>
                      <Text style={styles.description}>{entry.hp_title}</Text>
                      <Text style={styles.description}>{entry.hp_author}</Text>
                    </View>
              </View>
          </View>
        </TouchableHighlight>
      );
    }

  render() {
    return (
        <View>
          <ListView
                //设置ListView的数据源
                dataSource={this.state.dataSource}
                //listview的回调方法
                renderRow={this.renderEntry.bind(this)}
                //滑动到底
                onEndReached={() => {
                  if (!this.state.loading) {
                    date.setMonth(date.getMonth() - 1)
                    ToastAndroid.show(date, ToastAndroid.SHORT)
                    this.getEntriesFromApiAsync(date)
                  }
                }}
                // renderFooter={() => <Footer
                  // loadEntries={ this.getEntriesFromApiAsync(date) }/>}
            />
        </View>
    );
  }
}

const Footer = (props) => (
  <View style={styles.container}>
    <TouchableOpacity style={styles.button}
      onPress={() => {
        date.setMonth(date.getMonth() - 1)
        ToastAndroid.show(date, ToastAndroid.SHORT)
        // props.getEntriesFromApiAsync(date)
        this.props.loadEntries(date);
      }}>
      <Text style={styles.text}>Load More</Text>
    </TouchableOpacity>
  </View>
);

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
  content: {
      fontSize: 16,
      textAlign: 'center',
  },
  description: {
      textAlign: 'center',
      paddingLeft: 10,
      paddingRight: 10,
      fontSize: 14,
      marginTop: 12
  },
  bottomContainer: {
      flex: 1,
      padding: 20
  },
  thumbnail: {
      width: windowWidth,
      height: windowWidth * 0.75
  },
  listView: {
      paddingTop: 20,
      backgroundColor: '#F5FCFF',
  },
});

const footerstyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    borderColor: '#8E8E8E',
    borderWidth: StyleSheet.hairlineWidth,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    height: 200
  },
  text: {
    color: '#8E8E8E',
  },
});
