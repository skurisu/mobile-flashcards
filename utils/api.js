import { AsyncStorage } from 'react-native';
import { DECKS } from './constants';

export function fetchDecks() {
  return AsyncStorage.getItem(DECKS).then(results => {
    const data = JSON.parse(results);
    return data;
  });
}

export function getDeck(id) {
  return fetchDecks().then(data => data[id]);
}

export function addDeck(key, deck) {
  return AsyncStorage.mergeItem(DECKS, JSON.stringify({ [key]: deck }));
}

export function addCard(key, cards, card) {
  return AsyncStorage.mergeItem(
    DECKS,
    JSON.stringify({ [key]: { questions: [...cards, card] } })
  );
}
