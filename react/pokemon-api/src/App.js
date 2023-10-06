import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react'
import axios from 'axios';



function App() {
    const [pokeList,setPokeList] = useState([])

  const fetchPoke = () => axios.get('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0')
  .then(response => 
    setPokeList(response.data.results))

  .catch(err=>{
  console.log(err)})


  
  return (
    <div className="App">
      <button onClick = {fetchPoke} >Fetch Pokemon</button>
      <ul>
      {pokeList.map((p,i) =>{
        return (
          
          <li>{p.name}</li>
          
        )
      }
      )}
      </ul>
    </div>
  );
}

export default App;
