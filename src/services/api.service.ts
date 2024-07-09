const baseUrl = 'https://dummyjson.com'

const getAllUsers = () => {
    return fetch(baseUrl+'/users')
        .then((value) => value.json())
}

const getPosts = () => {
    return fetch(baseUrl+'/posts')
        .then((value) => value.json())
}

const getComments = () => {
    return fetch(baseUrl+'/comments')
        .then((value) => value.json())
}


const getPostsOfUserById = (id: string | undefined) => {
    return fetch(baseUrl+'/'+id+'/posts')
        .then((value) => value.json())
}

export {getAllUsers, getPostsOfUserById, getPosts, getComments}