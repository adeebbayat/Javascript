import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PersonCard from './components/PersonCard'


function App() {
  const [age1, setAge1] = useState(21)
  const [age2, setAge2] = useState(80)
  const [age3, setAge3] = useState(47)
  const [age4, setAge4] = useState(35)
  
  return (
    <>
    <div className="App">
      <PersonCard firstName = {"Sam"} lastName = {"Smith"} age = {age1} hairColor = {"Brown"}/>
      <button onClick = {() => setAge1(age1 + 1)}>Birthday Button for Sam</button>
      <PersonCard firstName = {"Jane"} lastName = {"Doe"} age = {age2} hairColor = {"Blonde"}/>
      <button onClick = {() => setAge2(age2 + 1)}>Birthday Button for Jane</button>
      <PersonCard firstName = {"Josh"} lastName = {"Muck"} age = {age3} hairColor = {"Red"}/>
      <button onClick = {() => setAge3(age3 + 1)}>Birthday Button for Josh</button>
      <PersonCard firstName = {"Adeeb"} lastName = {"Bayat"} age = {age4} hairColor = {"Black"}/>
      <button onClick = {() => setAge4(age4 + 1)}>Birthday Button for Adeeb</button>

    </div>
      
    </>
  )
}

export default App
