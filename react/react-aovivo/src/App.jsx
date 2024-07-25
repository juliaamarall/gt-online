import { useEffect, useState } from 'react';
import './App.css';
import { Header } from './components/Header';
import { Main } from './components/Main';

export default function App() {
  const [pokeList, setPokeList] = useState([]);

  const texto = "lorem";

  async function getPokemons() {
    try {
      const pokeList =[]

      for(let i = 1; i <= 50; i++){
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i} `);
        const data = await response.json()
        pokeList.push(data)
        console.log(data.sprites)
      }
      
        console.log(pokeList)
      setPokeList(pokeList);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getPokemons();
  }, []);

  return (
    <>
      <Header />
      <Main list={pokeList} />
      <footer></footer>
    </>
  );
}
