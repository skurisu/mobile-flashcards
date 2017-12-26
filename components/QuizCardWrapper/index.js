import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { primaryBlue, white, green, red } from '../../utils/colors';
import { NavigationActions } from 'react-navigation';
import QuizCard from '../../components/QuizCard';
import Results from '../../components/Results';

class QuizCardWrapper extends Component {
  state = {
    currentIndex: 0,
    correct: 0,
    incorrect: 0
  };

  backToDeck = () => {
    const key = this.props.navigation.state.params.id;

    const resetAction = NavigationActions.reset({
      index: 1,
      actions: [
        NavigationActions.navigate({
          routeName: 'Home'
        }),
        NavigationActions.navigate({
          routeName: 'DeckDetails',
          params: { id: key }
        })
      ]
    });

    this.props.navigation.dispatch(resetAction);
  };

  restartQuiz = () => {
    const { id, cards } = this.props.navigation.state.params;

    const resetAction = NavigationActions.reset({
      index: 2,
      actions: [
        NavigationActions.navigate({
          routeName: 'Home'
        }),
        NavigationActions.navigate({
          routeName: 'DeckDetails',
          params: { id }
        }),
        NavigationActions.navigate({
          routeName: 'Quiz',
          params: { id, cards }
        })
      ]
    });

    this.props.navigation.dispatch(resetAction);
  };

  static navigationOptions = ({ navigation }) => {
    const { id } = navigation.state.params;
    return { title: `${id} Quiz` };
  };

  handleCorrectAnswer = () => {
    const { currentIndex, correct } = this.state;

    this.setState({ currentIndex: currentIndex + 1, correct: correct + 1 });
  };

  handleIncorrectAnswer = () => {
    const { currentIndex, incorrect } = this.state;

    this.setState({ currentIndex: currentIndex + 1, incorrect: incorrect + 1 });
  };

  render() {
    const { cards, id } = this.props.navigation.state.params;
    const { currentIndex, correct, incorect } = this.state;
    const selectedCard = cards[currentIndex];

    if (currentIndex < cards.length) {
      return (
        <View style={styles.container}>
          <Text style={{ position: 'absolute', top: 10, left: 10 }}>
            {currentIndex + 1}/{cards.length}
          </Text>
          <QuizCard card={selectedCard} />
          <View>
            <TouchableOpacity
              style={[styles.btn, styles.correctBtn]}
              onPress={this.handleCorrectAnswer}
            >
              <Text style={styles.btnText}>Correct</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.btn, styles.incorrectBtn]}
              onPress={this.handleIncorrectAnswer}
            >
              <Text style={styles.btnText}>Incorrect</Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    } else {
      return (
        <Results
          percentCorrect={Math.floor(correct / cards.length * 100)}
          id={id}
          backToDeck={this.backToDeck}
          restartQuiz={this.restartQuiz}
        />
      );
    }
  }
}

let styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
    justifyContent: 'center',
    alignItems: 'center'
  },
  btn: {
    padding: 15,
    borderRadius: 8,
    margin: 8
  },
  correctBtn: {
    backgroundColor: green
  },
  incorrectBtn: {
    backgroundColor: red
  },
  btnText: {
    color: white,
    fontWeight: 'bold',
    textAlign: 'center'
  }
});

export default QuizCardWrapper;
