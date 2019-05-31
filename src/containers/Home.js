import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

class Home extends Component {
  state = {
    searchTerm: ""
  }

  handleTermChange = (text) => {
    this.setState({ searchTerm: text })
  }

  handleSubmit = () => {
    this.props.navigation.navigate('Result', {
      searchTerm: this.state.searchTerm
    })
    this.setState({ searchTerm: "" })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Simple Dictionary</Text>
        <TextInput
          autoFocus={true}
          style={styles.searchInput}
          onChangeText={this.handleTermChange}
          value={this.state.searchTerm}
          placeholder="Enter Word" />
        <TouchableOpacity
          style={styles.submitButton}
          onPress={this.handleSubmit}>
          <Text style={styles.submitText}>SUBMIT</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  title: {
    fontSize: 40,
    color: '#005f8e',
    fontWeight: 'bold',
    textShadowColor: 'grey',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 10
  },
  searchInput: {
    width: '80%',
    borderColor: 'navy',
    borderWidth: 3,
    borderRadius: 5,
    padding: 15,
    marginTop: 30,
    marginBottom: 10,
    fontSize: 20,
  },
  submitButton: {
    padding: 10,
    borderRadius: 3,
    backgroundColor: 'green',
    width: '50%',
    marginTop: 20,
  },
  submitText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
  }
});

export default Home