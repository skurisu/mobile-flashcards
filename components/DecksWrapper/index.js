import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { white } from '../../utils/colors';

class DecksWrapper extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Deck Wrapper Component</Text>
      </View>
    );
  }
}

export default DecksWrapper;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white
  }
});
