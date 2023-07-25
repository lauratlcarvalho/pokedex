function PokemonCard({name, image}) {
 return (
        <figure>
            {image? <img src={image} alt={`Image of pokemon ${name}`}/> : "???"}
            <figcaption>{name}</figcaption>
        </figure>  
)
}


  export default PokemonCard;

  