import PropTypes from "prop-types";

function PokemonCard({name, imgSrc}) {

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