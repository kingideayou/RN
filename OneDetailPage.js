import React, { Component } from 'react';
import {
  StyleSheet,
  WebView,
  Navigator,
  BackAndroid
} from 'react-native';
import OneListPage from './OneListPage'

var WEBVIEW_REF = 'webview';
var HEADER = '#3b5998';
var BGWASH = 'rgba(255,255,255,0.8)';
export default class OneDetailPage extends Component {

  constructor(props){
    super(props);
    this.state = {
      url: ''
    }
  }

  componentDidMount() {
    //这里获取从 OneListPage 传递过来的参数: url
    this.setState({
      url: this.props.url
    });
    BackAndroid.addEventListener('hardwareBackPress', this.handleBack);
  }

  componentWillUnmount() {
    //Forgetting to remove the listener will cause pop executes multiple times
    BackAndroid.removeEventListener('hardwareBackPress', this.handleBack);
  }

  handleBack() {
    // const navigator = this.props.navigator;
    // const { navigator } = this.props;
    // _navigator 在 index.android.js 中定义
    if (_navigator && _navigator.getCurrentRoutes().length > 1){
      _navigator.pop();
      return true; //avoid closing the app
    }
    return false; //close the app
  }

  render() {
    return (
      <WebView
          ref={WEBVIEW_REF}
          automaticallyAdjustContentInsets={false}
          style={styles.webView}
          source={{uri: this.state.url}}
          javaScriptEnabled={true}
          domStorageEnabled={true}
          decelerationRate="normal"
          onNavigationStateChange={this.onNavigationStateChange}
          onShouldStartLoadWithRequest={this.onShouldStartLoadWithRequest}
          startInLoadingState={true}
          scalesPageToFit={true}
        />
    );
  }

  onNavigationStateChange = (navState) => {
    this.setState({
      backButtonEnabled: navState.canGoBack,
      forwardButtonEnabled: navState.canGoForward,
      url: navState.url,
      status: navState.title,
      loading: navState.loading,
      scalesPageToFit: true
    });
  };

  onShouldStartLoadWithRequest = (event) => {
    // Implement any custom loading logic here, don't forget to return!
    return true;
  };
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: HEADER,
  },
  addressBarRow: {
    flexDirection: 'row',
    padding: 8,
  },
  webView: {
    backgroundColor: BGWASH,
    height: 350,
  }
});
