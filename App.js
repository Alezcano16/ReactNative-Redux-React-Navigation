import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import { Provider, connect } from 'react-redux';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import reducer from './src/reducer';
import RepoList from './src/RepoList';
import RepoDetail from './src/RepoDetails';
import Profile from './src/Profile';

const client = axios.create({
  baseURL: 'https://api.github.com',
  responseType: 'json'
});

const store = createStore(reducer, applyMiddleware(axiosMiddleware(client)));



const Stack = createStackNavigator({
  Home: {
    screen: Profile
  },
  Detail: {
    screen: RepoDetail
  }
});
const AppContainer = createAppContainer(Stack);
export default class App extends Component {
  render() {
    return (
    <Provider store={store}>
        <SafeAreaProvider>
                <View style={styles.container}>
                    <AppContainer />
                </View>
        </SafeAreaProvider>
    </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
});