import { TextEntity } from "../data/TextEntity"

const url = 'https://jsonplaceholder.typicode.com/posts/'
let text = new Object(TextEntity)

//https://codezup.com/react-crud-application-with-restful-api/

export const postT = (inputPost, setInputPost,postText) => {

    //https://www.geeksforgeeks.org/javascript-objects/
    fetch(url , {
        method: 'POST',
        body: JSON.stringify(inputPost),
        headers: { 'Content-Type': 'application/json' }
    })
        .then((res) => res.json())
        .then((data) => {
            text = data
            postText(data)
            console.log(text)
            setInputPost(text)
        }).catch((e) => console.log(e))

}

export const getT = (getText) => {
    fetch(url)
        .then((res) => res.json())
        .then((data) => {
            data.map((d) => {
                text = data[d.id - 1]
                console.log(text)

            })
            getText(data)

        })
}
export const putT = (inputPut, setInputPut,putText) => {
    fetch(url + inputPut.id, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(inputPut)
    })
        .then(res => res.json())
        .then(data => {
            text = data
            putText(text)
            setInputPut(text)
            console.log(text)
        })
        .catch((e) => console.log(e))
}
export const deleteP = (inputDelete) => {
    fetch(url + inputDelete.id, {
        method: 'DELETE'
    })
        .then((res) => res.status)
        .then((data) => {
            text = data//funzione per 
            console.log(text)
        })
        .catch((e) => console.log(e))
}
export const getTById = (inputGetid,getIdText) => {
    const idResult = parseInt(inputGetid.id)
    fetch(url)
        .then((res) => res.json())
        .then((data) => {
            data.map((d) => {
                if (d.id === idResult) {
                    text = data[d.id - 1]
                    console.log(text)
                }

            })
            getIdText(text)

        })
}
