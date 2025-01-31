import { useDispatch, useSelector } from "react-redux"
import GetObject from "./ObjectText"

function GetArray() {

    const texts = useSelector((t:any)=> t.texting.value)


    return ( //https://www.kindacode.com/article/react-rendering-an-array-of-objects
        <div style={{ border: "1px solid", display: "flex", flexWrap: "wrap", justifyContent: "center", borderRadius: "6px" }}>
            {texts.map((a:any) => {
                if (Array.isArray(a)) {
                    return a.map(aIndex => (
                        <GetObject key={aIndex.id} objectText={aIndex}></GetObject>
                    ))
                }
                else return <GetObject key={a.id} objectText={a}></GetObject>
                
                
            })}

        </div>

    )

}

export default GetArray 