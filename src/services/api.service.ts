const baseUrl = 'https://dummyjson.com/users'

const getAllUsers = () => {
    return fetch(baseUrl)
        .then((value) => value.json())
}

const getPostsOfUserById = (id: string | undefined) => {
    return fetch(baseUrl+'/'+id+'/posts')
        .then((value) => value.json())
}

export {getAllUsers, getPostsOfUserById}