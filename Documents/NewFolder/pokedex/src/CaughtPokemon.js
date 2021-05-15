import React, { useState } from "react";

const CaughtPokemon = () => {
  const date = new Date().toLocaleDateString()

  // const [caught, setCaught] = useState(0);
  const [caught, setCaught] = useState([]);
  const [pokemonNameInput, setPokemonNameInput] = useState("")

  const handleInputChange = (event) => {
    if (event.target.value !== "") {
      setPokemonNameInput(event.target.value)
    }
  }
  // Empty the <input> after clicking on the button.
  const catchPokemon = () => {
    setCaught(caught.concat(pokemonNameInput));
    setPokemonNameInput("");
  }
  return (
    <div>
      <div>
        <input type="text" value={pokemonNameInput} onChange={handleInputChange}></input>
        <button onClick={catchPokemon}>Catch Pokemon</button>
      </div>
      {caught.map((item, index) => {
        return <li key={index}>{item}</li>
      })}
      <p>Caught {caught.length} Pokemon on {date}</p>
    </div>
  )
}

export default CaughtPokemon;

// Call the catchPokemon function
// Update the caught variable in the state
// Call the set Caught function with the updated counter value
// Rerendering with a new <p> tag with the updated state value
// The DOM is updated
// React is going to compare the new state with the old state