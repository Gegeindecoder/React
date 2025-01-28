import { useState } from "react";
import { deleteP } from "../services/TextService";

function DeleteInput() {

    const [inputDelete, setInputDelete] = useState({
        id: 1,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputDelete((p) => ({
            ...p, [name]: value
        }))
    }

    const handleButton = () => {
        console.log('click delete')
        deleteP(inputDelete, setInputDelete)
    }

    return (
        <div style={{ display: "flex", flexDirection: "column", border: "solid 1px", borderRadius: "5px", justifyContent: "center", alignItems: "center", gap: "30px", padding: "35px", margin: "20px" }}>
            <input type="number" name="id" value={inputDelete.id} placeholder="inserisci l'id" onChange={handleChange} />
            <button onClick={handleButton}>DELETE</button>
        </div>
    )
}

export default DeleteInput