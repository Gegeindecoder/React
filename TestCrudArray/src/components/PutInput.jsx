import { useState } from "react";
import { putT } from "../services/TextService";
import { updateTAxios } from "../services/TextServiceAxios";

function PutInput({putText}){
    
    const[inputPut, setInputPut] = useState({
        id:1,
        userId:1,
        title:''
    });
    
    const handleChange = (e)=>{
        const {name, value} = e.target;
        setInputPut((p)=>({
            ...p, [name]:value
        }))
    }
    // const putP= ()=>{
    //         const url=`https://jsonplaceholder.typicode.com/posts/${inputPut.id}`// da mettere id 
            
            
    //     }
    const handleButton=()=>{
        console.log('click put')
        updateTAxios(inputPut,setInputPut,putText)
    }
        

    return(
        <div style={{display: "flex",  flexDirection: "column", border:"solid 1px", borderRadius:"5px", justifyContent:"center", alignItems:"center", gap: "30px", padding: "35px", margin:"20px"}}>
            <input type="number" name="id" value={inputPut.id} placeholder="inserisci l'id" onChange={handleChange} />
            <input type="text" name="title" value={inputPut.title} placeholder="inserisci un testo" onChange={handleChange} />
            <input type="number" name="userId" value={inputPut.userId} placeholder="l'id del autore" onChange={handleChange} />
            <button onClick={handleButton}>PUT</button>
        </div>
    )
}

export default PutInput;