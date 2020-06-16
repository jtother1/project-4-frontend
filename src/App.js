import React from "react";
import "./App.css";
import Home from "./pages/Home.js";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';

function App() {
  return (
    <Router>
        <NavBar />
      <div className="container">
        <h1>Posts</h1>
        <Switch>
          <Route path="/" component={Home} exact />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
