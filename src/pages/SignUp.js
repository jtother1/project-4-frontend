import React, { Component } from "react";
import DogApi from "../DogApi";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      email: "",
      password: "",
      passwordVerify: "",
    };
  }
  emailInput = (event) => {
    this.setState({ email: event.target.value });
  };
  userNameInput = (event) => {
    this.setState({ userName: event.target.value });
  };
  PasswordInput = (event) => {
    this.setState({ password: event.target.value });
  };
  PasswordVerifyInput = (event) => {
    this.setState({ passwordVerify: event.target.value });
  };
  userAuthentication = (event) => {
    event.preventDefault(); //also redirect this homepage
    DogApi.createUser(this.state);
    console.log("hello");
  };

  render() {
    return (
      <form onSubmit={this.userAuthentication}>
        <h3>Sign Up</h3>

        <div className="form-group">
          <label>User Name</label>
          <input type="userName" className="form-control" placeholder="User Name" value={this.state.userName} onChange={this.userNameInput}/>
        </div>

        <div className="form-group">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email" value={this.state.email} onChange={this.emailInput}
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password" value={this.state.password} onChange={this.PasswordInput}
          />
        </div>
        <div className="form-group">
          <label>Validate Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Validate Password" value={this.state.passwordVerify} onChange={this.PasswordVerifyInput}
          />
        </div>

        <button type="submit" className="btn btn-primary btn-block">
          Sign Up 
        </button>
        <p className="forgot-password text-right">
          Already registered <a href="/logIn">log in?</a>
        </p>
      </form>
    );
  }
}

export default SignUp;
