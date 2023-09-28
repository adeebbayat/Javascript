import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PersonCard from './components/PersonCard'

function App() {
  

  return (
    <>
    <div className="App">
      <PersonCard firstName = {"Sam"} lastName = {"Smith"} age = {21} hairColor = {"Brown"}/>
      <PersonCard firstName = {"Jane"} lastName = {"Doe"} age = {45} hairColor = {"Blonde"}/>
      <PersonCard firstName = {"Josh"} lastName = {"Muck"} age = {15} hairColor = {"Red"}/>
      <PersonCard firstName = {"Adeeb"} lastName = {"Bayat"} age = {80} hairColor = {"Black"}/>
    </div>
      
    </>
  )
}

export default App
