import React from 'react';

// import { Container } from './styles';

const App: React.FC = () => {
  const [clicks, setClicks] = React.useState(0);
  const [listPokes, setListPokes] = React.useState<Poke[]>([]);

  const handleGetPoke = async () => {
    try {
      const response = await fetch(
        'https://pokeapi.co/api/v2/pokemon?limit=5&offset=0'
      );
      if (response.status !== 200) throw new Error(response.statusText);
      const data = await response.json();
      setListPokes(data.results as Poke[]);
      console.log(data);
    } catch (error) {
      console.error(error);
      alert(JSON.stringify(error));
    }
  };
  return (
    <div className="Container">
      <div className="CounterContainer">
        <h1>Contador de Cliques {clicks}</h1>
        <button onClick={() => setClicks(old => old + 1)}>Clique aqui</button>
      </div>
      <div className="PokeContainer">
        <div className="ListContainer">
          <ul>
            {listPokes?.map(el => (
              <li className="ListItem">
                <p>{el.name}</p>
              </li>
            ))}
          </ul>
        </div>
        <button onClick={handleGetPoke}>Busca Lista</button>
      </div>
    </div>
  );
};

export default App;

export interface Poke {
  name: string;
  url: string;
}
