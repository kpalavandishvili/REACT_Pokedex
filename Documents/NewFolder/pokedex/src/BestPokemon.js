import React from "react";

const BestPokemon = (prop) => {
  return (
    <div>
      <p>
        My favourite Pokemon is Eevee.
    </p>
      <ul>
        {prop.abilities.map((abilityName) => (
          <li>{abilityName}</li>
        ))}
      </ul>
    </div>
  )
}
export default BestPokemon;