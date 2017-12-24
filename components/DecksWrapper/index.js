import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { white } from '../../utils/colors';
import DeckCard from '../DeckCard';

class DecksWrapper extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() =>
            this.props.navigation.navigate('DeckDetails', { id: 'Deck Title' })
          }
        >
          <DeckCard />
        </TouchableOpacity>
      </View>
    );
  }
}

export default DecksWrapper;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
    padding: 15
  }
});
