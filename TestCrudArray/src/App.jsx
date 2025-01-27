import { useState } from 'react'
import './App.css'
import PostInput from './components/PostInput'
import GetInput from './components/GetInput'
import PutInput from './components/PutInput'
import DeleteInput from './components/DeleteInput'
import Result from './components/CrudResult'

function App() {
  const addtext = (t) => {
    setText([t])
  }
  const [text, setText] = useState([])


  return (
    <>
      <div>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
          <GetInput
            getText={addtext}
          ></GetInput>
          <PostInput
            addtext={addtext}
          ></PostInput>
          <PutInput></PutInput>
          <DeleteInput></DeleteInput>
        </div>
        <hr />
        <div>
          <Result
            arrayText={text}
          ></Result>
        </div>
      </div>
    </>
  )
}

export default App
