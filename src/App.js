import React from "react";
import "./App.css";
import Home from "./pages/Home.js";
import Login from "./pages/LogIn.js";
import SignUp from "./pages/SignUp.js";
import About from "./pages/About.js";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";

function App() {
  return (
    <Router>
      <NavBar />
      <div className="container">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" >
            <SignUp />
          </Route >
          {/* <Route exact path='/about' component={About} /> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
