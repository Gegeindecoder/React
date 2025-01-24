import { useState } from "react";

function PutInput(){
    
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
    const putP= ()=>{
            const url=`https://jsonplaceholder.typicode.com/posts/${inputPut.id}`// da mettere id 
            
            fetch(url,{
                method:'PUT',
                headers:{ 'Content-Type': 'application/json' },
                body: JSON.stringify(inputPut)
            })
            .then(res=> res.json())
            .then(data => console.log(data))
            .catch((e)=>console.log(e))
        }
        

    return(
        <div style={{display: "flex",  flexDirection: "column", border:"solid 1px", borderRadius:"5px", justifyContent:"center", alignItems:"center", gap: "30px", padding: "35px", margin:"20px"}}>
            <input type="number" name="id" value={inputPut.id} placeholder="inserisci l'id" onChange={handleChange} />
            <input type="text" name="title" value={inputPut.title} placeholder="inserisci un testo" onChange={handleChange} />
            <input type="number" name="userId" value={inputPut.userId} placeholder="l'id del autore" onChange={handleChange} />
            <button onClick={putP}>PUT</button>
        </div>
    )
}

export default PutInput;