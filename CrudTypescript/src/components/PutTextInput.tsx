import { useState } from "react";
import { put } from "../services/TextServices";


function PutInput({putText}:any){
    
    const[inputPut, setInputPut] = useState({
        id:'',
        userId:'',
        title:''
    });
    
    const handleChange = (e:any)=>{
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
        put(inputPut,setInputPut,putText, inputPut.id)
    }
        

    return(
        <div style={{display: "flex",  flexDirection: "column", border:"solid 1px", borderRadius:"5px", justifyContent:"center", alignItems:"center", gap: "30px", padding: "35px", margin:"20px"}}>
            <input type="number" name="id" value={inputPut.id} placeholder="inserisci l'id" onChange={handleChange} min={1}/>
            <input type="text" name="title" value={inputPut.title} placeholder="inserisci un testo" onChange={handleChange} />
            <input type="number" name="userId" value={inputPut.userId} placeholder="l'id del autore" onChange={handleChange} min={1}/>
            <button onClick={handleButton}>PUT</button>
        </div>
    )
}

export default PutInput;