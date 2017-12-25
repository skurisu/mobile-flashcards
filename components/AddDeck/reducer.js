import { ADD_DECK } from './actions';

const initialState = { decks: [] };

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_DECK:
      return {
        ...state,
        decks: action.deck
      };
    default:
      return state;
  }
}
