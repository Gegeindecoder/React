import { useState } from "react";
import { deleteT } from "../services/TextServices";

function DeleteInput() {

    const [inputDelete, setInputDelete] = useState({
        id: '',
    });

    const handleChange = (e:any) => {
        const { name, value } = e.target;
        setInputDelete((p) => ({
            ...p, [name]: value
        }))
    }

    const handleButton = () => {
        console.log('click delete')
        deleteT(inputDelete, setInputDelete,inputDelete.id)
    }

    return (
        <div style={{ display: "flex", flexDirection: "column", border: "solid 1px", borderRadius: "5px", justifyContent: "center", alignItems: "center", gap: "30px", padding: "35px", margin: "20px" }}>
            <input type="number" name="id" value={inputDelete.id} placeholder="inserisci l'id" onChange={handleChange} min={1} />
            <button onClick={handleButton}>DELETE</button>
        </div>
    )
}

export default DeleteInput