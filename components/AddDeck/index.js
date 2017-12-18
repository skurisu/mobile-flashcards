import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { white } from '../../utils/colors';

class AddDeck extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>ADD DECK!!</Text>
      </View>
    );
  }
}

export default AddDeck;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white
  }
});
