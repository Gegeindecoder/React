import GetObject from "./GetObject"

function GetArray({ arrayText }) {

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

    return ( //https://www.kindacode.com/article/react-rendering-an-array-of-objects
        <div style={{ border: "1px solid", display: "flex", flexWrap: "wrap", justifyContent: "center", borderRadius: "6px" }}>
            {arrayText.map((a) => {
                if (Array.isArray(a)) {
                    return a.map(aIndex => (
                        <GetObject key={aIndex.id} objectText={aIndex}></GetObject>
                    ))
                }else return <GetObject key={a.id} objectText={a}></GetObject>
                
                
            })}

        </div>

    )

}

export default GetArray 