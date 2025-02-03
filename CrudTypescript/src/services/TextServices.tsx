import axios from "axios"; // utilizzo senza istanza
import Testo from "../types/text"
import http from "../types/http-common"

// IPOTETICO FETCHING CON CONTROLLER
// https://www.bezkoder.com/react-redux-crud-example/

export const getAllHttp = () => {
    return http.get('/')
}

export const getIdHttp = (id: number) => {
    return http.get('/' + id)
}

export const postHttp = ( data: Testo) => {
    return http.post('/', data)
}

export const putHttp = (id:number,data: Testo) => {
    return http.post('/'+ id, data)
}

export const deleteHttp = (id:number) => {
    return http.post('/'+ id)
}




// export const getAll = (getText:any) => {
//     axios.get(baseUrl)
//         .then(res => {
//             const data = res.data
//             data.map((d :any) => {
//                 text = data[d.id - 1]
//                 console.log(text)
//             })
//             getText(data)
//         }).catch(e => console.log(e))
// }

// // export const getId = (inputGetid:Object, getIdText:any,id:string) => {
// //     axios.get(baseUrl)
// //         .then(res => {
// //             const data = res.data
// //             data.map((d:any) => {
// //                 if (d.id === parseInt(id)) {
// //                     text = data[d.id - 1]
// //                     console.log(text)
// //                 }
// //             })
// //             getIdText(text)
// //         }).catch(e => console.log(e))
// // }

// export const post = (inputPost:Object, setInputPost:any, postText:any) => {
//     axios.post(baseUrl, { inputPost })
//         .then(res => {
//             text.id = res.data.id
//             text.title = res.data.inputPost.title
//             text.userId = parseInt(res.data.inputPost.userId)
//             postText(text)
//             setInputPost(text)
//             console.log(text)
//         }).catch(e => console.log(e))
// }

// export const put = (inputPut:Object, setInputPut:any, putText:any, id:string) => {
//     axios.put(baseUrl + id, { inputPut })
//         .then(res => {
//             text.id = parseInt(res.data.id)
//             text.title = res.data.inputPut.title
//             text.userId = parseInt(res.data.inputPut.userId)
//             putText(text)
//             setInputPut(text)
//             console.log(text)

//         }).catch(e => console.log(e))
// }


// export const deleteT = (inputDelete: Object, setInputDelete: any, id: string) => {
//     axios.delete(baseUrl + id)
//         .then(res => {
//             text = res.data
//             setInputDelete(text)
//             console.log(res.status)

//         }).catch(e => console.log(e))
// }
