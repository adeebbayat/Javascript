import logo from './logo.svg';
import './App.css';
import ListForm from './components/ListForm'
import ListDisplay from './components/ListDisplay'
import {useState} from 'react'
function App() {
  const [tasks, setTasks]= useState([])



  const changeState = (newTask) => {
    
    
    setTasks([...tasks, newTask])
  };

  const deleteTask = (deleteIdx) => {
     const filteredTasks = tasks.filter((el,i) => i !== deleteIdx)
    setTasks(filteredTasks)
  }
  return (
    <div className="App">
      <ListForm changeState={changeState}/>
      {tasks.map((task,idx) => {
        return (<ListDisplay key={idx} task={task} idx = {idx} deleteTask = {deleteTask}/>)
      })}
      
    </div>
  );
}

export default App;
