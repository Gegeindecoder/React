import { useState } from "react";
import { getTById } from "../services/TextService";
import { getIdTAxios } from "../services/TextServiceAxios";

function getTByIdInput({getIdText}) {
    
    const[inputGetid, setInputGetid] = useState({
            id:1,
        });
    
    
        const handleChange = (e)=>{
            const {name, value} = e.target;
            setInputGetid((p)=>({
                ...p, [name]:value
            }))
        }
        const handleButton = () => {
            console.log('click get')
            getIdTAxios(inputGetid,getIdText)
        }

    return (
        <div style={{ display: "flex", flexDirection: "column", border: "solid 1px", borderRadius: "5px", justifyContent: "center", alignItems: "center", gap: "30px", margin: "20px" }}>
            <input type="number" name="id" value={inputGetid.id} placeholder="id " onChange={handleChange} />
            <button onClick={handleButton}>GET</button>
        </div>
    )
}
export default getTByIdInput