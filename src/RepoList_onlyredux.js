import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import { listRepos,listClients } from './reducer';

class RepoList extends Component {
  componentDidMount() {
    this.props.listRepos('relferreira');
    setTimeout(()=>{this.props.listClients();},1000)
    
  }
  renderItem = ({ item }) => (
    <View key={item.key} style={styles.item}>
      <Text>{item.Descripcion1}</Text>
    </View>
  );
  render() {
    const { repos, clients } = this.props;
    console.log(this.props)
    return (
      <FlatList
        styles={styles.container}
        data={repos}
        renderItem={this.renderItem}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  item: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc'
  }
});

const mapStateToProps = state => {
  let storedRepositories = state.repos.map(repo => ({ key: repo.Articulo, ...repo }));
  let storeClients = state.clients
  return {
    repos: storedRepositories,
    clients: storeClients
  };
};

const mapDispatchToProps = {
  listRepos,
  listClients
};

export default connect(mapStateToProps, mapDispatchToProps)(RepoList);