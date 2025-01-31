import axios from "axios";
/*
creazione dell'istanza su compoenenti in comune di axios

https://github.com/bezkoder/react-typescript-api-call/tree/master/src

https://axios-http.com/docs/instance
*/
export default axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/posts',
    headers: {
        "Content-type": "application/json"
      }
})