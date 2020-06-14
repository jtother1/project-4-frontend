import axios from 'axios';
const dogApi = axios.create({
    //Axios creates reusable instances with baseUrl
    baseURL: 'http://localhost:8000/'
})
export default {
    getAllPosts(query) {
        //query what will be displayed in url
        return dogApi.get(`/posts/`)
    }
}