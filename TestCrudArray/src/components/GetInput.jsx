import { getT } from "../services/TextService"
import { getAllTAxios } from "../services/TextServiceAxios"

function GetInput({ getText }){
    

    // const[get,setGet]=useState({
    //     id:0,
    //     userId:0,
    //     title:''
    // });
    
     const handleButton =(e)=>{
            console.log('click get')
            getAllTAxios(getText)
        }    
        

    return(
        <div style={{display: "flex",  flexDirection: "column", border:"solid 1px", borderRadius:"5px", justifyContent:"center", alignItems:"center", gap: "30px",  margin:"20px"}}>
            <button onClick={handleButton}style={{height:"100%", width:"100%",borderRadius:"5px"}}>GET</button>
        </div>
    )
}

export default GetInput;  