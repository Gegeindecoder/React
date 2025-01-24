/*
se typescript

interface Props{
    title:string
    booleano: boolean
    descrizione: string
}
*/


function Card({id, title, booleano, descrizione}){ 
    //const altraRisposta = altroBooleano ? "bene": "male"
    // altroBooleano &&  <p>bene</p>        && sta per se condizione procedi
    //const imgURL = 'https://yt3.googleusercontent.com/LjkemlD5JfWAGKszp5CAepfKiRNts89hTo-njg0matyjh_LEeph-jBFP66y3DtO8bjkZHXqk=s176-c-k-c0x00ffffff-no-rj' 
    
    return(
        <div style={{border: "1px solid black", borderRadius: "5px"}}>
            <h2>{title}</h2>
            {booleano ? <p>ok</p> : <p>non ok</p>}
            <p>{descrizione}</p>
        </div>
    )
}

export default Card