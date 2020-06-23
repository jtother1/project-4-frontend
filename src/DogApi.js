import axios from "axios";

const dogApi = axios.create({
  //Axios creates reusable instances with baseUrl
  baseURL: "http://localhost:8000/",
});
export default {
  getAllPosts() {
    //query what will be displayed in url
    return dogApi.get(`/posts/`);
  },
  getAllComments() {
    //query what will be displayed in url
    return dogApi.get(`/comments/`);
  },
  createUser(user) {
    return dogApi.post(`/users/register`, user);
  },
  setToken(token) {
    return (dogApi.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${token}`);
  },
  checkToken(token) {
    return dogApi.post(`/api/token/verify/`, { token });
  },
  logIn(user) {
      return dogApi.post(`/api/token/`, user);
  },
  postComment(comment) {
      return dogApi.post(`/comments/`, comment)
  },
  createPost(post) {
      return dogApi.post(`/posts/`, post)
  }
};
