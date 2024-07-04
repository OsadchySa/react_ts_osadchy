import axios from "axios";

const baseUrl = 'https://dummyjson.com/users'

let axiosInstance = axios.create({
    baseURL: baseUrl,
    headers: {
        'Content-Type': "application/json",
    }
})
const getAllUsers = () => {
    return fetch(baseUrl)
        .then((value) => value.json())
}
const getPostsOfUserById = async (id:number) => {
    return await axiosInstance.get('/'+id+'/posts').then((response)=> {return response.data})
}




export {getAllUsers, getPostsOfUserById}