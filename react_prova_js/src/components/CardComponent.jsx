import { useEffect, useState } from "react"

function CardComponent({ addPersona }) {
    //da valori iniziali del input
    const [personaInit, setPersonaInit] = useState({
        title: '',
        booleano: true,
        descrizione: ''
    })
    //con l'evento click i valori iniziali vengono sovrascritti con i valori presenti
    const personaAdding = (e) => {
        const { name, value, type, checked } = e.target // paranetro (e per evento) . target ovvero il pezzo a cui fa riferimento
        const tipoValore = type === 'text' ? value : checked
        setPersonaInit((p) => ({
            ...p, [name]: tipoValore //[name] è la parte che sovracrive
        }))
    }
    // all'evento del click assume i valori inseriti
    const newPersona = () => {
        const addingPersona = {
            title: personaInit.title,
            booleano: personaInit.booleano,
            descrizione: personaInit.descrizione
        }
        setPersonaInit(addingPersona)
        addPersona(addingPersona)
    }


    //dopo aver passato al componente in App() con useEffect passa al titolo del docmento il title per ogni modifica
    useEffect(() => {
            console.log(personaInit.title)
    }, [addPersona]) //dipendenza della persona aggiunta
    /*
        se come dipendeza non ce' fa niente 
        se ha [] praticamenta la fà la prima volta
        se ha [dipendenza] aggirna ogni variazione di dipendenza
    */

    return (
        <div>
            <input type="text" name="title" value={personaInit.title} onChange={personaAdding} />
            <input type="checkbox" name="booleano" checked={personaInit.booleano} onChange={personaAdding}></input>
            <input type="text" name="descrizione" value={personaInit.descrizione} onChange={personaAdding} />
            <button onClick={newPersona}>add</button>
        </div>
    )
}

export default CardComponent;