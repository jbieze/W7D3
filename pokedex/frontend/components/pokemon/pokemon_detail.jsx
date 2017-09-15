import React from 'react';

class PokemonDetail extends React.Component {

  componentDidMount() {
    this.props.requestSinglePokemon(this.props.match.params.pokemonId);
  }

  componentWillReceiveProps(newProps) {
    if (this.props.match.params.pokemonId !== newProps.match.params.pokemonId) {
      this.props.requestSinglePokemon(newProps.match.params.pokemonId);
    }
  }

  render() {
    const { pokemon, items } = this.props;
    if (!pokemon) return null;

    return (
      <div>
        <li>{pokemon.name}</li>
        <img src={pokemon.image_url}/>
        <li>{pokemon.attack}</li>
        <li>{pokemon.defense}</li>
        <li>{pokemon.poke_type}</li>
        <li>{pokemon.moves.join(', ')}</li>
      </div>
    );
  }
}

export default PokemonDetail;
