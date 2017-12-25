import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Constants } from 'expo';
import { MaterialCommunityIcons, Entypo } from '@expo/vector-icons';
import { primaryBlue, white } from './utils/colors';
import DecksWrapper from './components/DecksWrapper';
import AddDeck from './components/AddDeck';
import DeckDetails from './components/DeckDetails';
import AddCard from './components/AddCard';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';

function CustomStatusBar({ ...props }) {
  return (
    <View
      style={{
        height: Constants.statusBarHeight,
        backgroundColor: primaryBlue
      }}
    >
      <StatusBar translucent {...props} />
    </View>
  );
}

const Tabs = TabNavigator(
  {
    AllDecks: {
      screen: DecksWrapper,
      navigationOptions: {
        tabBarLabel: 'Decks',
        tabBarIcon: ({ tintColor }) => (
          <MaterialCommunityIcons
            name="cards-outline"
            size={30}
            color={tintColor}
          />
        )
      }
    },
    AddDeck: {
      screen: AddDeck,
      navigationOptions: {
        tabBarLabel: 'Add Deck',
        tabBarIcon: ({ tintColor }) => (
          <Entypo name="plus" color={tintColor} size={30} />
        )
      }
    }
  },
  {
    navigationOptions: {
      header: null
    },
    tabBarOptions: {
      activeTintColor: primaryBlue,
      style: {
        height: 50,
        backgroundColor: '#fff',
        shadowColor: 'rgba(0,0,0,0.24)',
        shadowOffset: {
          width: 0,
          height: 3
        },
        shadowRadius: 6,
        shadowOpacity: 1
      }
    }
  }
);

const MainNavigator = StackNavigator({
  Home: {
    screen: Tabs
  },
  DeckDetails: {
    screen: DeckDetails,
    navigationOptions: {
      headerTintColor: white,
      headerStyle: {
        backgroundColor: primaryBlue
      }
    }
  },
  AddCard: {
    screen: AddCard,
    navigationOptions: {
      headerTintColor: white,
      headerStyle: {
        backgroundColor: primaryBlue
      }
    }
  }
});

export default class App extends React.Component {
  render() {
    const store = createStore(rootReducer);

    return (
      <Provider store={store}>
        <View style={{ flex: 1 }}>
          <CustomStatusBar barStyle="light-content" />
          <MainNavigator />
        </View>
      </Provider>
    );
  }
}
