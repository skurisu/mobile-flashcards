import React, { Component } from 'react';
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import { primaryBlue, white, green } from '../../utils/colors';
import { NavigationActions } from 'react-navigation';
import { addCard } from '../../utils/api';

class AddCard extends Component {
  state = {
    questionText: '',
    answerText: ''
  };

  static navigationOptions = { title: 'Add Card' };

  handleAddCard = () => {
    const key = this.props.navigation.state.params.id;
    const { cards } = this.props.navigation.state.params;
    const card = {
      question: this.state.questionText,
      answer: this.state.answerText
    };
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

    addCard(key, cards, card);
    this.props.navigation.dispatch(resetAction);
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={{ marginTop: 10 }}>
          <Text>Question: </Text>
          <TextInput
            value={this.state.questionText}
            onChangeText={questionText => this.setState({ questionText })}
            style={styles.questionInput}
          />
        </View>
        <View style={{ marginTop: 20 }}>
          <Text>Answer: </Text>
          <TextInput
            multiline={true}
            onChangeText={answerText => this.setState({ answerText })}
            value={this.state.answerText}
            style={styles.answerInput}
          />
        </View>
        <TouchableOpacity style={styles.addBtn} onPress={this.handleAddCard}>
          <Text style={styles.addBtnText}>Add Card</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: white,
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  questionInput: {
    height: 30,
    width: 350,
    borderWidth: 1,
    borderColor: primaryBlue,
    marginTop: 10,
    paddingLeft: 5,
    borderRadius: 8
  },
  answerInput: {
    borderWidth: 1,
    borderColor: primaryBlue,
    width: 350,
    height: 100,
    marginTop: 10,
    borderRadius: 8
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

export default AddCard;
