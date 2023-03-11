import axios from "axios"
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL

const myApi = axios.create({
    baseURL: BACKEND_URL,
})

myApi.createPost = (post) => {
    return myApi.post('/', post)
}

myApi.getOnePost = (id) => {
    return myApi.get(`/posts/${id}`)
}

myApi.deletePost = (id) => {
    return myApi.delete(`/posts/${id}`)
}

myApi.updatePost = (id, post) => {
    return myApi.patch(`/posts/${id}`, post)
}

export default myApi