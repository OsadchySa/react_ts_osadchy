import axios from "axios";

const baseUrl = 'https://jsonplaceholder.typicode.com/posts'
 let axiosInstance = axios.create({
     baseURL: baseUrl,
     headers: {
         'Content-Type':'application/json'
     }
 })

const sendPostOfUser = (data:object) => {
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            data
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .then((json) => console.log(json));
}

export default sendPostOfUser