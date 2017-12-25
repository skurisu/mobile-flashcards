import { combineReducers } from 'redux';
import decks from '../components/AddDeck/reducer';
const rootReducer = combineReducers({
  decks
});

export default rootReducer;
