import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAf_o9EbPMItcukF62cs3Y7sQAweKhHBtI",
  authDomain: "test-commerce-10105.firebaseapp.com",
  projectId: "test-commerce-10105",
  storageBucket: "test-commerce-10105.appspot.com",
  messagingSenderId: "274335927108",
  appId: "1:274335927108:web:5b15a928b7e6be44b3e511"
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
