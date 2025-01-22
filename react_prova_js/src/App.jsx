import { useState } from 'react'
import "./components/Navabar"
import Card from './components/Card'
import './App.css'
import Input from './components/CardComponent'
import CardComponent from './components/CardComponent'

function App() {
  const addPersona = (p)=>{
    setPersona([...persona, p])
  }

  const[persona , setPersona] = useState([
    {
      id: 1,
      title : "Persona1",
      booleano: false,
      descrizione: "è la prima"
    },
    {
      id: 2,
      title : "Persona2", 
      booleano: true, 
      descrizione: "è la seconda"
    },
    {
      id: 3,
      title: "Persona3",
      booleano: false,
      descrizione: "è la terza"
    }
  ])
  

  return (
    <>
     <CardComponent 
     addPersona={addPersona}
     >
     </CardComponent>
      <div>
      {persona.map((p)=>(
      <Card
      key={p.id}
      title={p.title}
      booleano={p.booleano}
      descrizione ={p.descrizione}
      ></Card>
    ))} 
      </div>

    </>
  )
}

export default App
