import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';



function App() {
  const [Id,setId] = useState("");
  const [characterData, setCharacterData] = useState({})
  const [planetData,setPlanetData] = useState({})
  const [PP,setPP] = useState("people")
  
  const navigate = useNavigate();
  

  const submitHandler = (e) =>{
    e.preventDefault();
    const peoplePlanet = document.getElementById("personPlace").value
    setPP(peoplePlanet)
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
      
      
  }).catch((err) => setPP(err))}
    

  
  return (
    <div className="App">
      <form onSubmit= {submitHandler}>
      <div className = 'flex'>
          <h3>Search for:</h3>
          <select name="personPlace" id="personPlace">
            <option selected="selected" value="people">People</option>
            <option value="planets">Planets</option>
          </select>
          <h3>ID:</h3>
          <input type="text" onChange = {(e)=>setId(e.target.value)} className='textbox'/>
          <button type="submit" className="btn btn-primary">Search</button>
      </div>
      </form>
      <div>
      {PP === "people" ? (
          
            <div className='left'>
              <h2>{characterData.name}</h2>
              <p>Height: {characterData.height}</p>
              <p>Mass: {characterData.mass}</p>
              <p>Hair Color: {characterData.hair_color}</p>
              <p>Skin Color: {characterData.skin_color}</p>
            </div>
          
        ) : PP === "planets" ? (
          
            <div className='left'>
              <h2>{planetData.name}</h2>
              <p>Climate: {planetData.climate}</p>
              <p>Terrain: {planetData.terrain}</p>
              <p>Surface Water: {planetData.surface_water}</p>
              <p>Population: {planetData.population}</p>
            </div>
          
        ) : (
        <div>
          <h1>These aren't the droids you're looking for</h1>
          <img src="https://th.bing.com/th/id/OIP.5mIw_6GvgAPRT46FeCs1mQAAAA?pid=ImgDet&rs=1"/>
        </div>
        )}
      </div>
    </div>
  );

  }
export default App;
