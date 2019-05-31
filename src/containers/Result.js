import React, { Component } from 'react'
import { View, Text, Image, StyleSheet } from "react-native";
import axios from 'axios'

export class Result extends Component {
  state = {
    result: ""
  }

  async componentDidMount() {
    const searchTerm = this.props.navigation.getParam('searchTerm', '')
    try {
      const result = await axios.get(`https://dog.ceo/api/breed/${searchTerm}/images/random`)
      this.setState({ result })
    } catch (e) {
      console.log(e)
    }
  }

  render() {
    return (
      this.state.result ? (
        <View>
          <Text style={styles.text}>
            Search Term: {this.props.navigation.getParam('searchTerm', '')}
          </Text>
          <Image
            style={styles.image}
            source={{
              uri: this.state.result.data.message
            }} />
        </View>
      ) : null
    )
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: 20
  },
  image: {
    width: '100%',
    height: 300,
  }
})

export default Result
