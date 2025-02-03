import { useState } from "react";
import { useDispatch } from "react-redux";
import Testo from "../types/text";
import { update } from "../store/textSlice";


function PutInput() {

    const dispatch = useDispatch()
    const [inputPut, setInputPut] = useState({
        id: '',
        userId: '',
        title: '',
        body:''
    });

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setInputPut((p) => ({
            ...p, [name]: value
        }))
    }
    // const putP= ()=>{
    //         const url=`https://jsonplaceholder.typicode.com/posts/${inputPut.id}`// da mettere id 


    //     }
    const handleButton = () => {
        console.log('click put')
        // put(inputPut,setInputPut, inputPut.id)
        const text: Testo = {
            id: parseInt(inputPut.id),
            userId: parseInt(inputPut.userId),
            title: inputPut.title,
            body: inputPut.body
        }
        dispatch(update(text))
    }


    return (
        <div style={{ display: "flex", flexDirection: "column", border: "solid 1px", borderRadius: "5px", justifyContent: "center", alignItems: "center", gap: "30px", padding: "35px", margin: "20px" }}>
            <input type="number" name="id" value={inputPut.id} placeholder="inserisci l'id" onChange={handleChange} min={1} />
            <input type="text" name="title" value={inputPut.title} placeholder="inserisci un testo" onChange={handleChange} />
            <input type="number" name="userId" value={inputPut.userId} placeholder="l'id del autore" onChange={handleChange} min={1} />
            <button onClick={handleButton}>PUT</button>
        </div>
    )
}

export default PutInput;