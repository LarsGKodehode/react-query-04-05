import { useState } from "react";
import { usePokemonList } from "./hooks/usePokemonList";
import { usePokemonData } from "./hooks/usePokemonData";

function App() {
  const [count, setCount] = useState(0);

  const { isLoading, error, data } = usePokemonList();

  function handleClick() {
    setCount((oldCount) => oldCount + 1);
  }

  return (
    <>
      <h1>Foobar</h1>
      <button onClick={handleClick}>Do Fetch</button>

      <ul>
        {!isLoading &&
          data.results.map((pokemon) => {
            return (
              <li key={pokemon.name}>
                <PokemonCard pokemon={pokemon} />
              </li>
            );
          })}
      </ul>
    </>
  );
}

function PokemonCard(props) {
  const { pokemon } = props;

  const { isLoading, error, data } = usePokemonData(pokemon.name, pokemon.url);

  console.log(data);

  return (
    <>
      {isLoading ? (
        <h1>Loading</h1>
      ) : (
        <div>
          <h2>{data.name}</h2>
        </div>
      )}
    </>
  );
}

export default App;
