import React from 'react';
import "./Login.css";
import logosrc from '../images/myntra_logo.png';
import { Button } from '@material-ui/core';
import { auth, provider } from '../firebase';


function login() {
    const signIn=() => {
auth.signInWithPopup(provider)
.catch(error => alert(error.message));
    };
    return (
        <div className="login">
          {/* <h2>Myntra Forum</h2>   */}
          <div className="login_logo">
          <img src={logosrc} alt="" />
          </div>
          <Button onClick={signIn}>Login Now</Button>
        </div>
    );
}

export default login;
