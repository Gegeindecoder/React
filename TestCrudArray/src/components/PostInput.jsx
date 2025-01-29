import { useState } from "react";
import { postT } from "../services/TextService";
import { postTAxios } from "../services/TextServiceAxios";


function PostInput({postText}){


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

    const handleButton =()=>{
        console.log('click post')
        postTAxios(inputPost,setInputPost,postText)
    }    
    
    
    return(
        <div style={{display: "flex",  flexDirection: "column", border:"solid 1px", borderRadius:"5px", justifyContent:"center", alignItems:"center", gap: "30px", padding: "35px", margin:"20px"}}>
            <input type="text" name="title" value={inputPost.title} placeholder="inserisci un testo" onChange={handleChange} />
            <input type="number" name="userId" value={inputPost.userId} placeholder="l'id del autore" onChange={handleChange} />
            <button onClick={handleButton}>POST</button>
        </div>
    )

}
export default PostInput;