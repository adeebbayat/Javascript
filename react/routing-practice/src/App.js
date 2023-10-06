import logo from './logo.svg';
import './App.css';
import React from 'react';
import {Link,Routes,Route} from 'react-router-dom';
import {useParams} from 'react-router';
function App() {

  const Home = (props) => {
    return  (
      <h1>Welcome</h1>
    )
  }
  
  const NumOrWord = (props) =>{
    const {numOrWord} = useParams();
    return isNaN(numOrWord) 
    ? (
      <h1>{numOrWord}</h1>
    )
    :(
      <h1>The number is: {numOrWord}</h1>
    ) 
    
  }
  

  const ColorWord = (props) => {
    const {word, color1, color2} = useParams();
    const style = {
      color: color1,
      backgroundColor:color2
    }
    return(
      <h1 style = {style}>The word is {word}</h1>
    )
  }

  return (
    <div className="App">
      <p>

      </p>
      <Routes>
        <Route path="/home" element = {<Home/>}/>
        <Route path="/:numOrWord" element = {<NumOrWord/>}/>
        <Route path="/:word/:color1/:color2" element={<ColorWord/>}/>
      </Routes>
    </div>
  );
}

export default App;
