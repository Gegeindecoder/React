import { useEffect, useState } from "react";

function PostInput(){

    const url= 'https://jsonplaceholder.typicode.com/posts'

    const[inputPost, setInputPost] = useState({
        userId:1,
        title:''
    });

    const handleChange = (e)=>{
        const {name, value} = e.target;
        setInputPost((p)=>({
            ...p, [name]:value
        }))
    }

    const postP = ()=>{
        
        fetch(url,{
            method: 'POST',
            body: JSON.stringify(inputPost),
            headers:{ 'Content-Type': 'application/json' }
        })
        .then((res)=> res.json())
        .then((data)=>{
            console.log(data)
        }).catch((e)=>console.log(e))
    }
    
    return(
        <div style={{display: "flex",  flexDirection: "column", border:"solid 1px", borderRadius:"5px", justifyContent:"center", alignItems:"center", gap: "30px", padding: "35px", margin:"20px"}}>
            <input type="text" name="title" value={inputPost.title} placeholder="inserisci un testo" onChange={handleChange} />
            <input type="number" name="userId" value={inputPost.userId} placeholder="l'id del autore" onChange={handleChange} />
            <button onClick={postP}>POST</button>
        </div>
    )

}
export default PostInput;