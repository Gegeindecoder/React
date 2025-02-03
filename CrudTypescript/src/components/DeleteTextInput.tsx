import { useState } from "react";
import { remove } from "../store/textSlice";
import { useDispatch } from "react-redux";

function DeleteInput() {

    const dispathc = useDispatch()
    const [inputDelete, setInputDelete] = useState({
        id: '',
    });

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setInputDelete((p) => ({
            ...p, [name]: value
        }))
    }

    const handleButton = () => {
        console.log('click delete')
        // deleteT(inputDelete, setInputDelete,inputDelete.id)
        const text: object = {
            id: parseInt(inputDelete.id),
            userId:null,
            title: null,
            body: null
        }
        dispathc(remove(text))
    }

    return (
        <div style={{ display: "flex", flexDirection: "column", border: "solid 1px", borderRadius: "5px", justifyContent: "center", alignItems: "center", gap: "30px", padding: "35px", margin: "20px" }}>
            <input type="number" name="id" value={inputDelete.id} placeholder="inserisci l'id" onChange={handleChange} min={1} />
            <button onClick={handleButton}>DELETE</button>
        </div>
    )
}

export default DeleteInput