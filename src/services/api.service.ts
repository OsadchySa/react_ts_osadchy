const baseUrl = 'https://dummyjson.com'

const getAllUsers = (skip:number) => {
    return fetch(baseUrl+'/users?skip='+skip)
        .then((value) => value.json())
}

const getPosts = (skip:number) => {
    return fetch(baseUrl+'/posts?skip='+skip)
        .then((value) => value.json())
}

const getComments = (skip:number) => {
    return fetch(baseUrl+'/comments?skip='+skip)
        .then((value) => value.json())
}







const getPostsOfUserById = (id: string | undefined) => {
    return fetch(baseUrl+'/'+id+'/posts')
        .then((value) => value.json())
}

export {getAllUsers, getPostsOfUserById, getPosts, getComments}