import { useEffect, useState } from "react"

function CardHttp({ rPersona }) {
    const urlApi = 'https://randomuser.me/api'
    //info iniziali
    const [api, setApi] = useState({
        title: '',
        first: '',
        last: '',
        gender: '',
        country: '',
        state: '',
        email: '',
        img: ''
    })
    //info aggiornate
    const handleSubmit = () => {
        // console.log('va')
        fetch(urlApi)
            .then(response => response.json())
            .then(data => {
                const user = data.results[0]
                const newApi = {
                    title: user.name.title,
                    first: user.name.first,
                    last: user.name.last,

                    gender: user.gender,

                    country: user.location.country,
                    state: user.location.state,

                    email: user.email,

                    img: user.picture.large
                }
                setApi(newApi)
                rPersona(newApi)
            })
    }

    useEffect(() => {
        if (api.first) {
            document.title = 'benvenuta/o: ' + api.first
            console.log(document.title)
        }
    }, [rPersona])

    return (
        // <form onSubmit={handleSubmit}>
        //     <button type="submit">persona random</button>
        // </form>
        <button onClick={handleSubmit}>persona random</button>
    )
}

export default CardHttp