import { useState } from "react";

function GetInput(){
    
    const url='https://jsonplaceholder.typicode.com/posts'

    const[get,setGet]=useState({})
    const getP=()=>{
        fetch(url)
        .then((res)=> res.json())
        .then((data)=>console.log(data))
    }
    

    return(
        <div style={{display: "flex",  flexDirection: "column", border:"solid 1px", borderRadius:"5px", justifyContent:"center", alignItems:"center", gap: "30px", padding: "35px", margin:"20px"}}>
            <button onClick={getP}>GET</button>
        </div>
    )
}

export default GetInput;