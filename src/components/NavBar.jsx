import PropTypes from 'prop-types'

function NavBar({setPokemonIndex, pokemonList}) {

   
    const handleButtonClick = (pokemonList) => {
        setPokemonIndex(pokemonList);
    };
    return (
        <>
        {pokemonList.map((pokemon,pokemonList)=> (
                <button onClick={()=> handleButtonClick(pokemonList)} key={pokemon.name}>{pokemon.name}</button>
            ))}
      </>
    );
  }

  NavBar.propTypes = {
    pokemonIndex: PropTypes.number.isRequired,
    setPokemonIndex: PropTypes.elementType,
    pokemonList: PropTypes.elementType,
    length: PropTypes.elementType,
}

export default NavBar