import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import { white } from '../../utils/colors';
import DeckCard from '../DeckCard';
import { fetchDecks } from '../../utils/api';

class DecksWrapper extends Component {
  state = {
    decks: []
  };

  componentDidMount() {
    fetchDecks().then(data => {
      const decks = Object.keys(data || {}).map(key => {
        const obj = data[key];
        return obj;
      });

      this.setState({ decks });
    });
  }

  render() {
    const { decks } = this.state;

    if (decks.length === 0) {
      return (
        <View style={styles.addMessage}>
          <Text>Please add a deck</Text>
        </View>
      );
    }

    return (
      <ScrollView style={styles.container}>
        {decks.map(deck => {
          return (
            <TouchableOpacity
              key={deck.title}
              onPress={() =>
                this.props.navigation.navigate('DeckDetails', {
                  id: deck.title
                })
              }
            >
              <DeckCard title={deck.title} length={deck.questions.length} />
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    );
  }
}

export default DecksWrapper;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
    padding: 15
  },
  addMessage: {
    flex: 1,
    backgroundColor: white,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
