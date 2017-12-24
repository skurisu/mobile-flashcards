import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { primaryBlue } from '../../utils/colors';

class DeckCard extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={[styles.center, styles.titleHeading]}>Deck Title</Text>
        <Text style={[styles.center]}>10 Cards</Text>
      </View>
    );
  }
}

export default DeckCard;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginTop: 17,
    justifyContent: 'center',
    shadowRadius: 3,
    shadowOpacity: 0.8,
    shadowColor: 'rgba(0, 0, 0, 0.24)',
    shadowOffset: {
      width: 0,
      height: 3
    }
  },
  center: {
    textAlign: 'center'
  },
  titleHeading: {
    color: primaryBlue,
    fontSize: 25
  }
});
