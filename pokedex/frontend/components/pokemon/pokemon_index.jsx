import React from 'react';

class PokemonIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    return this.props.requestAllPokemon();
  }

  render() {
    return (
      <div className="pokemon-index">
        {this.props.pokemon.map(
          (poke, idx) =>
            <li key={idx}>
              {poke.name}<br/>
              <img src={poke.image_url}/>
            </li>)
        }
      </div>
    );
  }
}

export default PokemonIndex;
