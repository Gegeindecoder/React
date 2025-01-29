import axios from 'axios'
import { TextEntity } from '../data/TextEntity'

const baseUrl = 'https://jsonplaceholder.typicode.com/posts/'
let text = new Object(TextEntity)

//https://gbfactory.it/tutorial/come-usare-axios-in-react/

export const getAllTAxios = (getText) => {
    axios.get(baseUrl)
        .then(res => {
            const data = res.data
            data.map(d => {
                text = data[d.id - 1]
                console.log(text)
            })
            getText(data)
        }).catch(e => console.log(e))
}

export const getIdTAxios = (inputGetid, getIdText) => {
    axios.get(baseUrl)
        .then(res => {
            const data = res.data
            data.map(d => {
                if (d.id === parseInt(inputGetid.id)) {
                    text = data[d.id - 1]
                    console.log(text)
                }
            })
            getIdText(text)
        }).catch(e => console.log(e))
}

export const postTAxios = (inputPost, setInputPost, postText) => {
    axios.post(baseUrl, { inputPost })
        .then(res => {
            text.id = res.data.id
            text.title = res.data.inputPost.title
            text.userId = parseInt(res.data.inputPost.userId)
            postText(text)
            setInputPost(text)
            console.log(text)
        }).catch(e => console.log(e))
}

export const updateTAxios = (inputPut, setInputPut, putText) => {
    axios.put(baseUrl + inputPut.id, { inputPut })
        .then(res => {
            text.id = parseInt(res.data.id)
            text.title = res.data.inputPut.title
            text.userId = parseInt(res.data.inputPut.userId)
            putText(text)
            setInputPut(text)
            console.log(text)

        }).catch(e => console.log(e))
}

export const deleteTAxios = (inputDelete, setInputDelete) => {
    axios.delete(baseUrl + inputDelete.id)
        .then(res => {
            text = res.data
            setInputDelete(text)
            console.log(res.status)

        }).catch(e => console.log(e))
}