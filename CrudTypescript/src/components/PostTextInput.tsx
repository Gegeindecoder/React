import { useId, useState } from "react";
import { useDispatch } from "react-redux";
import { add } from "../store/textSlice"
import Testo from "../types/text";

function PostTextInput(){
    const dispatch = useDispatch()
    const[inputPost, setInputPost] = useState({
        id:101,
        userId:'',
        title:'',
        body:''
    });


    const handleChange = (e: any)=>{
        const {name, value} = e.target;
        setInputPost((p)=>({
            ...p, [name]:value
        }))
    }

    const handleButton =()=>{
        console.log('click post')
        const text:Testo={
            id: inputPost.id++,
            userId: parseInt(inputPost.userId),
            title: inputPost.title,
            body: inputPost.body
        }
        console.log(text)
        dispatch(add(text))
    }    
    
    
    return(
        <div style={{display: "flex",  flexDirection: "column", border:"solid 1px", borderRadius:"5px", justifyContent:"center", alignItems:"center", gap: "30px", padding: "35px", margin:"20px"}}>
            <input type="text" name="title" value={inputPost.title} placeholder="inserisci un testo" onChange={handleChange} />
            <input type="number" name="userId" value={inputPost.userId} placeholder="l'id del autore" onChange={handleChange} min={1}/>
            <button onClick={handleButton}>POST</button>
        </div>
    )
}

export default PostTextInput