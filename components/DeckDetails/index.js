import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { primaryBlue, white, yellow } from '../../utils/colors';
import { getDeck } from '../../utils/api';

class DeckDetails extends Component {
  state = {
    deck: {
      questions: []
    }
  };
  static navigationOptions = ({ navigation }) => {
    const { id } = navigation.state.params;
    return { title: `${id}`, headerBackTitle: null };
  };

  componentDidMount() {
    getDeck(this.props.navigation.state.params.id).then(deck =>
      this.setState({ deck })
    );
  }

  render() {
    const { deck } = this.state;
    return (
      <View style={styles.container}>
        <View style={{ marginBottom: 50 }}>
          <Text style={[styles.center, styles.titleHeading]}>{deck.title}</Text>
          <Text style={[styles.center]}>{deck.questions.length} Cards</Text>
        </View>
        <View>
          <TouchableOpacity
            style={styles.btn}
            onPress={() =>
              this.props.navigation.navigate('AddCard', {
                id: deck.title,
                cards: deck.questions
              })
            }
          >
            <Text style={styles.addBtnText}>Add Card</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.btn, styles.startBtn]}
            onPress={() =>
              this.props.navigation.navigate('Quiz', {
                id: deck.title,
                cards: deck.questions
              })
            }
          >
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
