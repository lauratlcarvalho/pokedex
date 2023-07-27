import PropTypes from "prop-types";

function PokemonCard({pokemon}) {
const{name, imgSrc} = pokemon
 return (
        <figure>
            {imgSrc? <img src={imgSrc} alt={`Image of pokemon ${name}`}/> : "???"}
            <figcaption>{name}</figcaption>
        </figure>  
)
}

PokemonCard.propTypes = {
        pokemon: PropTypes.shape({
            name: PropTypes.string.isRequired,
            imgSrc:PropTypes.string,
        }).isRequired
    }


  export default PokemonCard