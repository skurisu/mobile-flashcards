import React, { Component } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { primaryBlue, white } from '../../utils/colors';

class AddCard extends Component {
  state = {
    questionText: 'What do you want to remember?'
  };

  static navigationOptions = { title: 'Add Card' };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inputWrapper}>
          <TextInput
            value={this.state.questionText}
            onChangeText={questionText => this.setState({ questionText })}
            style={styles.questionInput}
          />
        </View>
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
    marginTop: 50,
    paddingLeft: 5
    // color: 'gray'
  }
});

export default AddCard;
