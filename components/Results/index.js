import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { primaryBlue, white, green, red, yellow } from '../../utils/colors';
import { NavigationActions } from 'react-navigation';

class Results extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.result}>{this.props.percentCorrect}%</Text>
          <Text style={{ color: primaryBlue, textAlign: 'center' }}>
            CORRECT
          </Text>
        </View>
        <View>
          <TouchableOpacity style={styles.btn} onPress={this.props.backToDeck}>
            <Text style={styles.addBtnText}>Back to Deck</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.btn, styles.startBtn]}
            onPress={this.props.restartQuiz}
          >
            <Text style={styles.startBtnText}>Restart Quiz</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
    justifyContent: 'center',
    alignItems: 'center'
  },
  result: {
    color: primaryBlue,
    fontSize: 50
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

export default Results;
