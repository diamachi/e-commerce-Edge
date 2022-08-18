import React from "react";
import { auth, provider } from "../firebase";
import logosrc from "../images/myntra_logo.png";
import "./Login.css";

function login() {
  
  const signIn = () => {
    auth.signInWithPopup(provider).catch((error) => alert(error.message));
  };
  return (
    <div className="login">
      <div className="login_logo">
        <img src={logosrc} alt="" />
        <span className="title">-Forum</span>
      </div>
      <button onClick={signIn}>Login Now</button>
    </div>
  );
}

export default login;
