import { useState } from "react";
import { useDispatch } from "react-redux";
// import { getId } from "../services/TextServices";

function getTByIdInput() {

    const dispatch = useDispatch()

    const [inputGetid, setInputGetid] = useState({
        id: '',
    });


    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setInputGetid((p) => ({
            ...p, [name]: value
        }))
    }
    const handleButton = () => {
        console.log('click get')
        dispatch(getId(inputGetid))

        // getId(inputGetid,getIdText,inputGetid.id)
    }

    return (
        <div style={{ display: "flex", flexDirection: "column", border: "solid 1px", borderRadius: "5px", justifyContent: "center", alignItems: "center", gap: "30px", margin: "20px" }}>
            <input type="number" name="id" value={inputGetid.id} placeholder="id " onChange={handleChange} min={1} />
            <button onClick={handleButton}>GET</button>
        </div>
    )
}
export default getTByIdInput