import { useState } from 'react'
import "./components/Navabar"
import Card from './components/Card'
import './App.css'
import CardComponent from './components/CardComponent'
import CardHttp from './components/CardHttp'
import CardRanom from './components/CardRandom'

function App() {
  const addPersona = (p) => {
    setPersona([...persona, p])
  }

  const rPersona = (r) => {
    setRandomP([...randomP, r])
  }

  const [randomP, setRandomP] = useState([])

  const [persona, setPersona] = useState([
    {
      id: 1,
      title: "Persona1",
      booleano: false,
      descrizione: "è la prima"
    }
  ])


  return (
    <>
      <CardComponent
        addPersona={addPersona}// per aggiunge il nuovo valore insieme alle card esistenti da useState
      >
      </CardComponent>
      <div style={{display: "flex", flexWrap:"wrap", gap: "10px", padding: "10px"}}>
        {persona.map((p) => (
          <Card
            key={p.id}
            title={p.title}
            booleano={p.booleano}
            descrizione={p.descrizione}
          ></Card>

        ))}
      </div>
      <hr />

      <div>
        <CardHttp
          rPersona={rPersona}
        >
        </CardHttp>
        <div style={{display: "flex", flexWrap:"wrap",justifyContent:"center", alignItems:"center", gap: "30px", padding: "35px"}}>
          {randomP.map((r) => (
            <CardRanom
              key={r.email}
              title={r.title}
              first={r.first}
              last={r.last}
              gender={r.gender}
              count={r.count}
              state={r.state}
              email={r.email}
              img={r.img}
            >
            </CardRanom>
          ))}
        </div>
      </div>

    </>
  )
}

export default App
