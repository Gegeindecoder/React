import { useState } from "react"

function CardComponent({addPersona}){
    const [personaInit, setPersonaInit] = useState({
        title: '',
        booleano: true,
        descrizione: ''
    })
    const personaAdding = (e) =>{
        const  {name, value, type, checked} = e.target
        const tipoValore = type ==='text'  ? value : checked
        setPersonaInit((p)=>({
            ...p ,[name]: tipoValore
        }))
    }
     const newPersona = ()=>{
         const addingPersona = {
             title: personaInit.title,
             booleano: personaInit.booleano,
             descrizione: personaInit.title  
         }
         addPersona(addingPersona)
     }
    return(
        <div>
            <input type="text" name="title" value={personaInit.title} onChange={personaAdding}/>
            <input type="checkbox" name="booleano" checked={personaInit.booleano} onChange={personaAdding}></input>
            <input type="text" name="descrizione" value={personaInit.descrizione}onChange={personaAdding}/>
            <button onClick={newPersona}>add</button>
        </div>
    )
}

export default CardComponent;