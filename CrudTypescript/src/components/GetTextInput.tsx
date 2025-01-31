import { getAll } from "../services/TextServices"

function GetTextInput({getText}:any){

    const handleButton =()=>{
                console.log('click get')
                getAll(getText)
            }    
            
    
        return(
            <div style={{display: "flex",  flexDirection: "column", border:"solid 1px", borderRadius:"5px", justifyContent:"center", alignItems:"center", gap: "30px",  margin:"20px"}}>
                <button onClick={handleButton}style={{height:"100%", width:"100%",borderRadius:"5px"}}>GET</button>
            </div>
        )
    }
    
    export default GetTextInput