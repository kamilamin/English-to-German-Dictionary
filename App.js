import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Alert
} from 'react-native';
import english_german from './german_Englist.json';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      output: ''
    }
  }
  _ChangeText = (text) => {
    this.setState({
      input: text
    })
  }
  _showMeaning = () => {
    Alert.alert("input", this.state.input)
    const { input } = this.state;
    const a = input.toLowerCase()
    const Meaning = a in english_german ?
      english_german[a] : "Not Found"

    if (Meaning == "Not Found") {
      this.setState({
        output: "The word you typed is not found in Dictionary"
      })
    } else {
      this.setState({
        output: Meaning
      })
    }
  }
  render() {
    return (
      <View style={styles.parent}>
        <View>
          <Text>Type something in English</Text>
        </View>
        <TextInput
          placeholder="Type in English"
          style={styles.textInput}
          onChangeText={(text) => { this._ChangeText(text) }}
          onSubmitEditing={this._showMeaning.bind(this)}
        />
        <View style={styles.germanWord}>
          <Text>Translated into German Language</Text>
          <Text style={{ color: 'red' }}>{this.state.output}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textInput: {
    backgroundColor: 'white',
    height: 40,
    width: "100%"
  },
  parent: {
    padding: 16
  },
  germanWord: {
    marginTop: 15,
    fontSize: 30,
    fontStyle: 'italic'
  }
});
