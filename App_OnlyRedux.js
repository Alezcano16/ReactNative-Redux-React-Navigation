import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import { Provider, connect } from 'react-redux';
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';

import reducer from './src/reducer';
import RepoList from './src/RepoList';

const client = axios.create({
  baseURL: 'http://200.124.7.3:1085/datasnap/rest/TserverMethods1/',
  responseType: 'json'
});
console.log(client)
const store = createStore(reducer, applyMiddleware(axiosMiddleware(client)));
export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <RepoList />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 50
  }
});