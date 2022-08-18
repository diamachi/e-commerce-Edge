import React, { Component } from "react";
import { Link } from "react-router-dom";
import myn_logo from "./assets/myntra_logo.png"
import face_logo from "./assets/facebook.png"
import google_logo from"./assets/google.png"
import { auth, provider } from "../../../firebase";

const signIn = () => {
    auth.signInWithPopup(provider).catch((error) => alert(error.message));
  };

class SignInForm extends Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    let target = event.target;
    let value = target.type === "checkbox" ? target.checked : target.value;
    let name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    console.log("The form was submitted with the following data:");
    console.log(this.state);
  }

  render() {
    return (
      <div className="formCenter">
        <form className="formFields" onSubmit={this.handleSubmit}>
          <div className="formField">
            <label className="formFieldLabel" htmlFor="email">
              E-Mail Address
            </label>
            <input
              type="email"
              id="email"
              className="formFieldInput"
              placeholder="Enter your email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </div>

          <div className="formField">
            <label className="formFieldLabel" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="formFieldInput"
              placeholder="Enter your password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </div>

          <div className="formField">
            <button className="formFieldButton">Sign In</button>{" "}
            <Link to="/" className="formFieldLink">
              Create an account
            </Link>
          </div>

          <div className="socialMediaButtons">
            <button className="formFieldButton">
                <img src={google_logo} width="36px" className="imgGog"/>
                Sign In with Google</button>{" "}
                
            <button className="formFieldButton">
                <img src={face_logo} width="36px" className="imgFac"/>
                Sign In with Facebook</button>{" "}
            <button className="formFieldButton">
                <img src={myn_logo} width="44px" className="imgMyn"/>
                Sign In with Myntra </button>{" "}
          </div>
        </form>
      </div>
    );
  }
}

export default SignInForm;
