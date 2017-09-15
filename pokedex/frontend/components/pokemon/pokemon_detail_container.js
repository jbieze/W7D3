import {connect} from 'react-redux';
import { selectPokemon, selectAllPokemon} from '../../reducers/selectors';
import { requestSinglePokemon } from '../../actions/pokemon_actions';
import PokemonDetail from './pokemon_detail';

const mapStateToProps = state => {
  const pokemon = state.entities.pokemon[state.ui.pokeDisplay];

  return{
    pokemon,
    items: selectPokemon(state, pokemon)
  };
};

const mapDispatchToProps = dispatch => ({
  requestSinglePokemon: (poke) => dispatch(requestSinglePokemon(poke)),

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonDetail);
