import axios from "axios"
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL


const myApi = axios.create({
    baseURL: BACKEND_URL,
})

myApi.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("token")
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }

        return config;
    },
    (error) => {
        // Do something with request error
        console.error(error);
    }
);

myApi.allPosts = (post) => {
    return myApi.get('/posts')
}

myApi.createPost = (post) => {
    return myApi.post('/posts/create')
}

myApi.createComment = (comment) => {
    return myApi.get(`/posts/${postId}`)
}

myApi.getSpecificPost = (postId) => {
    return myApi.get(`/posts/${postId}`)
}

myApi.updatePost = (postId, post) => {
    return myApi.patch(`/posts/${postId}`, post)
}

myApi.deletePost = (postId) => {
    return myApi.delete(`/posts/${postId}`)
}

myApi.availableTutor = () => {
    return myApi.get('/available-tutors')
}

myApi.myProfile = () => {
    return myApi.get(`/profile`)
}

myApi.otherProfile = (profileId) => {
    return myApi.get(`/profile/${profileId}`)
}
export default myApi