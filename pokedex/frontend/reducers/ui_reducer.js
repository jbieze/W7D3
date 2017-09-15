import {RECEIVE_POKEMON} from '../actions/pokemon_actions';

const defaultState = {
  pokeDisplay: ""
};

const uiReducer = (state = defaultState, action) => {
  console.log('ACTION:', action);
  let newState = {};

  switch (action.type) {
    case RECEIVE_POKEMON:
      return {pokeDisplay: action.pokemon.id};
    default:
      return state;
  }
};

export default uiReducer;
