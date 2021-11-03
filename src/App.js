/* eslint-disable no-unused-vars */
// import React from "react";
// import "./App.css";
// import Card from './components/Card'
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import Upper from "./components/Upper";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import React, { useEffect } from "react";
import "./App.css";
// import Card from "./components/Card";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Upper from "./components/Upper";
import { useSelector, useDispatch } from "react-redux";
import { selectUser } from "./features/userSlice";
import Login from "./components/Login";
import { auth } from "./firebase";
import { login, logout } from "./features/userSlice";
import Home from './components/Home';
import Order from './components/Order';
import 'bootstrap/dist/css/bootstrap.min.css';

// function App() {
//   return (
//     <div className="App">
//       {/* navbar */}
//       <Upper />
//       {/* <Card /> */}
//       {/* genchat */}
//     </div>
//   );
// }

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
          <Upper />

          <Router>
            <div>

              {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
              <Switch>
                <Route exact path="/">
                  <Home />
                </Route>
                <Route path="/order">
                  <Order />
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
