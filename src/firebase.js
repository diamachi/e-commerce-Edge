import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDTxwZvYi6lmGtzQ2tTjgqFVzo1qeE5JLY",
  authDomain: "forum-test-2507e.firebaseapp.com",
  projectId: "forum-test-2507e",
  storageBucket: "forum-test-2507e.appspot.com",
  messagingSenderId: "43267579468",
  appId: "1:43267579468:web:a943a414d78383b4145ee9",
  measurementId: "G-VGZ7EB52JP",
};

//   const firebaseApp = firebase.initializeApp(firebaseConfig);
//   const db =firebaseApp.firestore();
//   const auth = firebase.auth();
//   const provider = new firebase.auth.GoogleAuthProvider();

//   export {auth , provider};
//   export default db;
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
