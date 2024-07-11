const baseUrl = 'https://dummyjson.com'

const getAllUsers = () => {
    return fetch(baseUrl+'/users?skip=60')
        .then((value) => value.json())
}

const getPosts = () => {
    return fetch(baseUrl+'/posts?skip=60')
        .then((value) => value.json())
}

const getComments = () => {
    return fetch(baseUrl+'/comments?skip=60')
        .then((value) => value.json())
}


const getPostsOfUserById = (id: string | undefined) => {
    return fetch(baseUrl+'/'+id+'/posts')
        .then((value) => value.json())
}

export {getAllUsers, getPostsOfUserById, getPosts, getComments}