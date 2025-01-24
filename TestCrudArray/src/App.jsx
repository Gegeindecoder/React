import { useState } from 'react'
import './App.css'
import PostInput from './components/PostInput'
import GetInput from './components/GetInput'
import PutInput from './components/PutInput'
import DeleteInput from './components/DeleteInput'

function App() {
  const addPersona = (p)=>{
    setPersona([...persona, p])
  }
  const[persona, setPersona] = useState([])

  return (
    <>
    <div>
      <div style={{ display: "flex",flexWrap: "wrap", justifyContent:"center"}}>
      <GetInput></GetInput>
      <PostInput
      addPersona={addPersona}
      ></PostInput>
      <PutInput></PutInput>
      <DeleteInput></DeleteInput>
      </div>
      <hr />
      <div>

      </div>
    </div>
    </>
  )
}

export default App
