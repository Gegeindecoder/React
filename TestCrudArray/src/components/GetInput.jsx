
function GetInput({ getText }){
    
    const url='https://jsonplaceholder.typicode.com/posts'

    // const[get,setGet]=useState({
    //     id:0,
    //     userId:0,
    //     title:''
    // });
    const getP=()=>{
        fetch(url)
        .then((res)=> res.json())
        .then((data)=>{
            data.map((d)=>{
                const object = data[d.id-1]
                console.log(object)
                getText(data)
            })

        })
    }
    

    return(
        <div style={{display: "flex",  flexDirection: "column", border:"solid 1px", borderRadius:"5px", justifyContent:"center", alignItems:"center", gap: "30px", padding: "35px", margin:"20px"}}>
            <button onClick={getP}>GET</button>
        </div>
    )
}

export default GetInput;  