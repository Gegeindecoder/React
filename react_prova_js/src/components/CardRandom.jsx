function CardRanom({id, title, first, last, gender,country, state, email, img}){
    return(
        <div className="flex flex-col gap-3">
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