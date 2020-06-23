import React from "react";
import "./App.css";
import Home from "./pages/Home.js";
import LogIn from "./pages/LogIn.js";
import SignUp from "./pages/SignUp.js";
import About from "./pages/About.js";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import LogOut from "./pages/LogOut";
import DogApi from "./DogApi";
import NewPost from './pages/NewPost'

function App() {
  const [user, setUser] = React.useState(null);
  const [posts, setPosts] = React.useState([]);
  React.useEffect(() => {
    fetchPosts()
    let savedTokens = localStorage.getItem("tokens");
    if (savedTokens) {
      savedTokens = JSON.parse(savedTokens);
      DogApi.checkToken(savedTokens.access).then((res) => {
        if (res.status === 200) {
          DogApi.setToken(savedTokens.access);
          const savedUser = localStorage.getItem("user");
          setUser(savedUser);
        } else {
          logOut();
        }
      });
    }
  }, []);
  const fetchPosts = () => {
    DogApi.getAllPosts().then(res => {
      setPosts(res.data)
    })
  }
  const signUp = (newUser) => {
    DogApi.createUser(newUser).then((res) => {
      const tokens = res.data;
      console.log(tokens);
      DogApi.setToken(tokens.access);
      localStorage.setItem("tokens", JSON.stringify(tokens));
      const { email } = newUser;
      localStorage.setItem("user", email);
      setUser(email);
    });
  };
  const logOut = () => {
    localStorage.removeItem("tokens");
    localStorage.removeItem("user")
    setUser(null);
  };
  const logIn = (credentials) => {
    DogApi.logIn(credentials).then((res) => {
      console.log(res.data)
      const tokens = res.data;
      console.log(tokens);
      DogApi.setToken(tokens.access);
      localStorage.setItem("tokens", JSON.stringify(tokens));
      localStorage.setItem("user", credentials.email);
      setUser(credentials.email);
    });
  };
  const postComment = (comment) => {
    comment.user = user
    DogApi.postComment(comment).then(res => {
      fetchPosts()
    })
  }
  const createPost = (post) => {
    post.user = user
    post.comments = []
    DogApi.createPost(post).then(res => {
      fetchPosts()
    })
  }

  return (
    <Router>
      <NavBar user={user} logOut={logOut} />
      <div className="container">
        <Switch>
          <Route exact path="/">
            <Home posts={posts} postComment={postComment} user={user}/>
          </Route>
  <Route exact path="/login"><LogIn logIn={logIn} user={user}/></Route>
          <Route exact path="/signup">
            <SignUp submitSignUp={signUp} user={user} />
          </Route>
          <Route exact path="/logout" component={LogOut} />
          <Route exact path="/about" component={About} />
          <Route exact path='/post' >
            <NewPost createPost={createPost}/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
