/* eslint-disable no-unused-vars */
// import React from "react";
// import "./App.css";
// import Card from './components/Card'
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import Upper from "./components/Upper";
import Adver from "./components/Ad";
import React, { useEffect } from "react";
import "./App.css";
// import Card from "./components/Card";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Upper from "./components/Upper";
import { useSelector, useDispatch } from "react-redux";
import Chat from "./components/Chat";
import Sidebar from "./components/Sidebar";
import { selectUser } from "./features/userSlice";
import Login from "./components/Login";
import { auth } from "./firebase";
import { login, logout } from "./features/userSlice";

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
    <div className="app">
      {user ? (
        <>
          <Upper />
          <Adver />
          <div className="chat_sec">
            <Sidebar />
            <Chat />
          </div>
        </>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
