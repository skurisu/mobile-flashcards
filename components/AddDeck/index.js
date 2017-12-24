import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import { primaryBlue, white, green } from '../../utils/colors';

class AddDeck extends Component {
  state = {
    inputValue: ''
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.nameText}>What's the title of your new deck?</Text>
        <View style={styles.inputWrapper}>
          <TextInput
            value={this.state.inputValue}
            onChangeText={inputValue => this.setState({ inputValue })}
            style={styles.newDeckInput}
          />
        </View>
        <TouchableOpacity style={styles.addBtn}>
          <Text style={styles.addBtnText}>Add Deck</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default AddDeck;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
    justifyContent: 'center',
    alignItems: 'center'
  },
  newDeckInput: {
    height: 30,
    width: 350,
    borderWidth: 1,
    borderColor: primaryBlue,
    marginTop: 20,
    paddingLeft: 5,
    borderRadius: 8
  },
  nameText: {
    fontSize: 25,
    color: primaryBlue
  },
  addBtn: {
    backgroundColor: green,
    padding: 15,
    borderRadius: 8,
    margin: 8
  },
  addBtnText: {
    color: white,
    fontWeight: 'bold'
  }
});
