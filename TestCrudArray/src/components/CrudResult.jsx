import { useEffect, useState } from "react"

function CrudResult({ arrayText }) {

    // const [tArray, setTArray] = useState({
    //     id: 1,
    //     userId: 1,
    //     title: '',
    //     body: ''
    // })

    // useEffect(() => {
    // arrayText.map(a => ({
    //     ...a.map(aIndex => ({
    //         id: aIndex.id,
    //         userId: aIndex.userId,
    //         title: aIndex.title,
    //         body: aIndex.body,
    //     }))
    // }))}
    // }, [arrayText])



    // return (
    //     <div style={{ border: "1px, solid" }}>
    //         {arrayText.map(a => ({
    //             ...a.map(aIndex => ({
    //                 id: aIndex.id,
    //                 userId: aIndex.userId,
    //                 title: aIndex.title,
    //                 body: aIndex.body,
    //             }))
    //         }))}
    //         <h3>{tArray.id} {tArray.userId}</h3>
    //         <p>{tArray.title}</p>
    //     </div>
    // )

    return (
        <div style={{ border: "1px solid",display: "flex", flexWrap: "wrap", justifyContent: "center"  }}>
            {arrayText.map(a =>
                a.map(aIndex => (
                    <div key={aIndex.id} style={{ border: "1px solid purple", justifyContent: "center", margin:"5px", padding:"2px", width:"25%" }}>
                        <h6 style={{color:"red", float:"left top", marginTop:"0px" }}>id: {aIndex.id}</h6>
                        <h3> userId: {aIndex.userId}</h3>
                        <p>{aIndex.title}</p>
                    </div>
                ))
            )}

        </div>

    )

}

export default CrudResult