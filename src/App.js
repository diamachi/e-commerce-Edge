/* eslint-disable no-unused-vars */
// import React from "react";
// import "./App.css";
// import Card from './components/Card'
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import Upper from "./components/Upper";
import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
// import Card from "./components/Card";
import { useDispatch, useSelector } from "react-redux";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Community from "./components/Community";
import Discussion from "./components/Discussion";
import Home from "./components/Home";
import Login from "./components/Login";
import Rewards from "./components/Rewards";
import Upper from "./components/Upper";
import { login, logout, selectUser } from "./features/userSlice";
import { auth } from "./firebase";

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
              <Switch>
                <Route exact path="/">
                  <Home />
                </Route>
                <Route path="/community">
                  <Community />
                </Route>
                <Route path="/rewards">
                  <Rewards />
                </Route>
                <Route path="/Discussion">
                  <Discussion />
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
