function CardRanom({ title, first, last, gender, country, state, email, img }) {
    return (
        <div style={{border: "1px solid black", borderRadius: "5px",padding: "10px"}}>
            <h3>{title} {first} {last}</h3>
            <p>{gender}</p>
            <p>{country}</p>
            <p>{state}</p>
            <p>{email}</p>
            <img src={img} alt="img.profilo" />
        </div>
    )
}

export default CardRanom