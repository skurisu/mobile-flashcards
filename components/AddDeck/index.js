import { connect } from 'react-redux';
import { addDeck } from './actions';
import AddDeck from './component';

function mapDispatchToProps(dispatch) {
  return {
    addDeck: deck => {
      dispatch(addDeck(deck));
    }
  };
}

function mapStateToProps(state) {
  return {
    allDecks: state.decks.decks
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddDeck);
