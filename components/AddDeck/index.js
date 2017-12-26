import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import { primaryBlue, white, green } from '../../utils/colors';
import { addDeck, fetchDecks } from '../../utils/api';
import { NavigationActions } from 'react-navigation';

class AddDeck extends Component {
  state = {
    inputValue: ''
  };

  handleAddDeck = () => {
    const key = this.state.inputValue;
    const deck = { title: this.state.inputValue, questions: [] };
    const resetAction = NavigationActions.reset({
      index: 1,
      actions: [
        NavigationActions.navigate({ routeName: 'Home' }),
        NavigationActions.navigate({
          routeName: 'DeckDetails',
          params: { id: key }
        })
      ]
    });

    addDeck(key, deck);
    this.props.navigation.dispatch(resetAction);
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
        <TouchableOpacity style={styles.addBtn} onPress={this.handleAddDeck}>
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
