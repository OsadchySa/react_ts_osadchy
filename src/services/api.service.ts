const baseUrl = 'https://dummyjson.com/users'

const getAllUsers = () => {
    return fetch(baseUrl)
        .then((value) => value.json())
}

/*const getPostsOfUserById = (id: number) => {
    return fetch(baseUrl+'/'+id+'/posts')
        .then((value) => value.json())
}
*/
export {getAllUsers}