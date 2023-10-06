import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';

function App() {
  const [Id,setId] = useState("");
  const [characterData, setCharacterData] = useState({})
  const [planetData,setPlanetData] = useState({})
  
  const navigate = useNavigate();
  

  const submitHandler = (e) =>{
    e.preventDefault();
    const peoplePlanet = document.getElementById("personPlace").value
    navigate(`/${peoplePlanet}/${Id}`)
    axios.get(`https://swapi.dev/api/${peoplePlanet}/${Id}`).then(response=>{
      
      if(peoplePlanet === 'people'){
        const {name,height,mass,hair_color,skin_color} = response.data
      setCharacterData({name,height,mass,hair_color,skin_color})
      }
      else if(peoplePlanet === 'planets'){
        const {name,climate,terrain,surface_water,population} = response.data
      setPlanetData({name,climate,terrain,surface_water,population})
      }
      
      
  })}
    

  
  return (
    <div className="App">
      <form onSubmit= {submitHandler}>
      <div className = 'flex'>
          <h3>Search for:</h3>
          <select name="personPlace" id="personPlace">
            <option value="people">People</option>
            <option value="planets">Planets</option>
          </select>
          <h3>ID:</h3>
          <input type="text" onChange = {(e)=>setId(e.target.value)} className='textbox'/>
          <button type="submit" className="btn btn-primary">Search</button>
      </div>
      </form>
      <div>
      {document.getElementById("personPlace").value === "people" ? (
      characterData && (
          <div className='left'>
            <h2>{characterData.name}</h2>
            <p>Height: {characterData.height}</p>
            <p>Mass: {characterData.mass}</p>
            <p>Hair Color: {characterData.hair_color}</p>
            <p>Skin Color: {characterData.skin_color}</p>
          </div>
          )
      ):(
        planetData && (
          <div className = 'left'>
            <h2>{planetData.name}</h2>
            <p>Climate: {planetData.climate}</p>
            <p>Terrain: {planetData.terrain}</p>
            <p>Surface Water: {planetData.surface_water}</p>
            <p>Population: {planetData.population}</p>
          </div>
        )
      )}
      </div>
    </div>
  );

  }
export default App;
