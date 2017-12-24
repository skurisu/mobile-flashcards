import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { primaryBlue, white, yellow } from '../../utils/colors';

class DeckDetails extends Component {
  static navigationOptions = ({ navigation }) => {
    const { id } = navigation.state.params;
    return { title: `${id}`, headerBackTitle: null };
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={{ marginBottom: 50 }}>
          <Text style={[styles.center, styles.titleHeading]}>Deck Title</Text>
          <Text style={[styles.center]}>10 Cards</Text>
        </View>
        <View>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => this.props.navigation.navigate('AddCard')}
          >
            <Text style={styles.addBtnText}>Add Card</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.btn, styles.startBtn]}>
            <Text style={styles.startBtnText}>Start Quiz</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default DeckDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: white
  },
  center: {
    textAlign: 'center'
  },
  titleHeading: {
    color: primaryBlue,
    fontSize: 25
  },
  btn: {
    borderWidth: 2,
    borderColor: yellow,
    padding: 15,
    borderRadius: 8,
    margin: 8
  },
  startBtn: {
    backgroundColor: yellow
  },
  addBtnText: {
    color: yellow,
    fontWeight: 'bold'
  },
  startBtnText: {
    color: white,
    fontWeight: 'bold'
  }
});
