/* eslint-disable no-unused-vars */
// import React from "react";
// import "./App.css";
// import Card from './components/Card'
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import Upper from "./components/Upper";
import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

import { useDispatch, useSelector } from "react-redux";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";


import Community from "./components/Community/community";
import Home from "./components/Home/home";
import Login from "./components/Login/login";


import { login, logout, selectUser } from "./features/userSlice";
import { auth } from "./firebase";

// export default App;

function App() {
  const dispatch = useDispatch();

  const user = useSelector(selectUser);

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(
          login({
            uid: authUser.uid,
            photo: authUser.photoURL,
            displayName: authUser.displayName,
            email: authUser.email,
          })
        );
      } else {
        dispatch(logout());
      }
    });
  }, [dispatch]);
  return (
    <div class="app">
      {user ? (
        <>
          

          <Router>
            <div>
              <Switch>
                <Route exact path="/">
                  <Home />
                </Route>
                <Route path="/community">
                  <Community />
                </Route>
                
              </Switch>
            </div>
          </Router>
        </>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
