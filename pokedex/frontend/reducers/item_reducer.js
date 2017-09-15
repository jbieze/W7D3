import merge from 'lodash/merge';

import {
          RECEIVE_POKEMON
        } from '../actions/pokemon_actions';

const itemReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = {};

  // switch (action.type) {
  //   case RECEIVE_POKEMON:
  //       newState = action.pokemon.items;
  //       return Object.assign(newState, state);
  //   default:
  //     return state;
  // }
  switch(action.type) {
    case RECEIVE_POKEMON:
      const items = action.payload.items.reduce((acc, item) => {
        acc[item.id] = item;
        return acc;
      }, {});
      return merge({}, state, items);
    default:
      return state;
  }
};

export default itemReducer;
