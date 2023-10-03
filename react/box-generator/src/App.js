import logo from './logo.svg';
import './App.css';
import BoxForm from './components/BoxForm';
import BoxDiplay from './components/BoxDisplay'
import {useState} from 'react'
import './components/styles.css'

function App() {
  const [boxes, setBoxes]= useState([])



  const changeState = (newBox) => {
    
    
    setBoxes([...boxes, newBox])
    
  };

  return (
    <div className="App">
      <BoxForm changeState = {changeState}/>
      <div className = 'flex'>
      {boxes.map((box,idx) => {
        return (<BoxDiplay key={idx} box={box} />)
      })
    }
    </div>
    </div>
  );
}

export default App;
