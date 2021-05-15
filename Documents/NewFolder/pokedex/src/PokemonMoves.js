import React, { useState, useEffect } from "react";


const PokemonMoves = (props) => {
  const [pokemonData, setPokemonData] = useState(null)

  useEffect(() => {
    fetch(
      `https://pokeapi.co/api/v2/pokemon/1/`
    )
      .then((res) => res.json())
      .then((data) => {
        setPokemonData(data);
        console.log(data);
      });
  }, [props.pokemonId]);

  // if (pokemonData) {
  //   return (
  //     <div>
  //       <p>{pokemonData.name}'s moves:</p>
  //       <ul>
  //         {pokemonData.moves.map((move, index) => {
  //           return <li key={index}>{move.move.name}</li>;
  //         })} 
  //       </ul>
  //     </div>
  //   );
  // } else {
  //   return null;
  // }



  // Change the if / else statement in your JSX to use 
  //  the ternary operator 
  // (condition ? outputIfTrue : outputIfFalse) instead.
  return (
    pokemonData ? <div>
      <p>{pokemonData.name}'s moves:</p>
      <ul>
        {pokemonData.moves.map((move, index) => {
          return <li key={index}>{move.move.name}</li>;
        })}
      </ul>
    </div> : null
  )
}



export default PokemonMoves;
