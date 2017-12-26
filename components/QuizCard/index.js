import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { primaryBlue, white, green, yellow } from '../../utils/colors';
import { NavigationActions } from 'react-navigation';

class QuizCard extends Component {
  state = {
    flipped: false
  };

  handleSwitch = () => {
    const { flipped } = this.state;
    this.setState({ flipped: !flipped });
  };

  render() {
    const { card } = this.props;
    // console.log(card.card.answer);
    return (
      <View>
        {this.state.flipped ? (
          <View style={styles.container}>
            <Text style={styles.answerText}>{card.answer}</Text>
            <TouchableOpacity
              onPress={this.handleSwitch}
              style={{ marginTop: 10 }}
            >
              <Text style={styles.answerBtn}>QUESTION</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View style={styles.container}>
            <Text style={styles.titleHeading}>{card.question}</Text>
            <TouchableOpacity
              onPress={this.handleSwitch}
              style={{ marginTop: 10 }}
            >
              <Text style={styles.answerBtn}>ANSWER</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    );
  }
}

let styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  titleHeading: {
    color: primaryBlue,
    fontSize: 25,
    textAlign: 'center'
  },
  answerBtn: {
    color: yellow,
    fontWeight: 'bold'
  },
  answerText: {
    fontSize: 25
  }
});
export default QuizCard;
