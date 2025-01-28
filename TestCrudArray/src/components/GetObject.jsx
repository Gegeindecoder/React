function GetObject({objectText}) {
    return (
        <div style={{ border: "1px solid purple", justifyContent: "center", margin: "5px", padding: "2px", width: "25%", backgroundColor: "#fff", borderRadius: "8px" }}>
            <h6 style={{ color: "red", float: "left top", marginTop: "0px" }}>id: {objectText.id}</h6>
            <h3> userId: {objectText.userId}</h3>
            <p>{objectText.title}</p>
        </div>
    )
}
export default GetObject