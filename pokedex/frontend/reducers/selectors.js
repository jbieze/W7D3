const _ = require('lodash');

export const selectAllPokemon = (state) => {
  return _.values(state.entities.pokemon);
};

export const selectPokemon = (state, id) => {
  console.log('SELECTOR:', state.entities);
  return _.values(state.entities.items[id]);
};
