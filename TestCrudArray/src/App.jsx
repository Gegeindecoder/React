import { useState } from 'react'
import './App.css'
import PostInput from './components/PostInput'
import GetInput from './components/GetInput'
import GetIdInput from './components/GetByIdInput'
import PutInput from './components/PutInput'
import DeleteInput from './components/DeleteInput'
import ResultA from './components/GetArray'

function App () {
  const addtext = (t) => {
    setText([t])
  }

  // const postText = (p) => {
  //   setText(...text, text)
  // }
  const [text, setText] = useState([])


  return (
    <>
      <div>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
          <GetInput
            getText={addtext}
          ></GetInput>
          <GetIdInput
            getIdText = {addtext}
          ></GetIdInput>
          <PostInput
            postText={addtext}
          ></PostInput>
          <PutInput
            putText={addtext}
          ></PutInput>
          <DeleteInput
          deleteText={addtext}
          ></DeleteInput>
        </div>
        <hr />
        <div style={{ backgroundColor: "#F2F2F2" }}>
          <ResultA
            arrayText={text}
          ></ResultA>
        </div>
      </div>
    </>
  )
}

export default App
