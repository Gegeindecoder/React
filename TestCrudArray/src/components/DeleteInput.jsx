import { useState } from "react";

function DeleteInput(){

    const[inputDelete, setInputDelete] = useState({
            id:1,
        });
        
        const handleChange = (e)=>{
            const {name, value} = e.target;
            setInputDelete((p)=>({
                ...p, [name]:value
            }))
        }
   
    const deleteP = () =>{
            const url=`https://jsonplaceholder.typicode.com/posts/${inputDelete.id}`
            fetch(url,{
                method: 'DELETE'
            })
            .then((res) => res.status)
            .then((data)=> console.log(data))
            .catch((e)=>console.log(e))
    }

    return(
        <div style={{display: "flex",  flexDirection: "column", border:"solid 1px", borderRadius:"5px", justifyContent:"center", alignItems:"center", gap: "30px", padding: "35px", margin:"20px"}}>
            <input type="number" name="id" value={inputDelete.id} placeholder="inserisci l'id" onChange={handleChange} />
            <button onClick={deleteP}>DELETE</button>
        </div>
    )
}

export default DeleteInput