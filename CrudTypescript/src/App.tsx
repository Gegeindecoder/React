import { useState } from 'react'
import './App.css'
import Testo from './types/text'
import Read from './components/GetTextInput'
import Create from './components/PostTextInput'
import Update from './components/PutTextInput'
import Delete from './components/DeleteTextInput'
import ResultA from './components/Array'

function App() {

  const result = (r: Testo) => {
    setText([r])
  }

  const [text, setText] = useState<Testo[]>([])

  return (
    <>
      <div>
        <div>
          <Read></Read>
          <Create></Create>
          <Update></Update>
          <Delete>
          </Delete>
        </div>
        <hr />
        <div style={{ backgroundColor: "#F2F2F2" }}>
          <ResultA
          // arrayText={texts}
          ></ResultA>
        </div>
      </div>
    </>
  )
}

export default App
