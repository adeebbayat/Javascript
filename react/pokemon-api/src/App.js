import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react'
function App() {
    const [pokeList,setPokeList] = useState([])

    fetch("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")
    .then(response => {
      // not the actual JSON response body but the entire HTTP response
      return response.json();
  }).then(response => {
      // we now run another promise to parse the HTTP response into usable JSON
      
      setPokeList(response.results);
  }).catch(err=>{
      console.log(err);
  });
  
  return (
    <div className="App">
      
      {pokeList.map((pokemon) => {
      return <p>{pokemon.name}</p>
      })}
    </div>
  );
}

export default App;
