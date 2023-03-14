import axios from "axios"
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL


const myApi = axios.create({
    baseURL: BACKEND_URL,
})

myApi.allPost = (post) => {
    return myApi.get('/posts/')
}

myApi.createPost = (post) => {
    return myApi.post('/posts/create')
}

myApi.getSpecificPost = (postId) => {
    return myApi.get(`posts/${postId}`)
}

myApi.updatePost = (postId, post) => {
    return myApi.patch(`/posts/${postId}`, post)
}

myApi.deletePost = (postId) => {
    return myApi.delete(`/posts/${postId}`)
}

myApi.availableTutor = (tutor) => {
    return myApi.get('/available-tutors')
}

myApi.myProfile = (user) => {
    return myApi.get('/profile')
}

myApi.otherProfile = (profileId) => {
    return myApi.get(`/profile/${profileId}`)
}
export default myApi