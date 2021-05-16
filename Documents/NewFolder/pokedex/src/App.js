import React from "react";
import Logo from "./Logo";
import BestPokemon from "./BestPokemon";
import CaughtPokemon from "./CaughtPokemon";
import PokemonMovesSelector from "./PokemonMovesSelector";
import PokemonCity from "./PokemonCity";

const App = () => {   // Create a function named App, which will be our component.

  const abilities = ['Anticipation', 'Adaptability', 'Run-Away'];  
  const date = new Date().toLocaleDateString();
  return (          
    <div>
      <Logo appName="Pokedex" />
      <BestPokemon  abilities = {abilities} />
      <CaughtPokemon date = {date}/>
      <PokemonMovesSelector />
      <PokemonCity />
    </div>
  )
}












// function App() { // creating function
//   return (
//     <div>
//       <Logo />
//       <BestPokemon />
//       <CaughtPokemon />
//     </div>
//   )


// }


// function Logo() {
//   const appName = "Pokedex";
//   return <header>
//     <h1>Welcome to the Pokedex</h1>
//     <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png"></img>

//   </header>

// }

// function BestPokemon() {
//   const abilities = ['Anticipation', 'Adaptability', 'Run-Away'];
//   return (
//     <div>
//       <p>My favourite Pokemon is Squirtle</p>
//       <ul>

//         {abilities.map((abilityName) => (
//           <li>{abilityName}</li>
//         ))}
//       </ul>
//     </div>
//   )
// }

// function CaughtPokemon() {
//   const date = new Date().toLocaleDateString();
//   return (
//     <p>
//       Caught 10 Pokemon on {date}
//     </p>
//   )

// }


export default App;