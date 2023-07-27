import PropTypes from 'prop-types'

function NavBar({pokemonIndex, setPokemonIndex, pokemonList}) {

   
    const nextButton = () => {
      if (pokemonIndex < pokemonList.length - 1) {
        setPokemonIndex(pokemonIndex + 1);
      }
    };
    const previousButton = () => {
      if (pokemonIndex > 0) {
        setPokemonIndex(pokemonIndex - 1);
      }
    };
    return (
      <>
        <div>
         
          <button onClick={previousButton}>Previous</button>
          <button onClick={nextButton}>Next</button>
        </div>
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