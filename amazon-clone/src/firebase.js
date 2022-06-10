import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC_6JR1DBexcfpHJJcshWq76W0d9foUOME",
  authDomain: "clone-442b2.firebaseapp.com",
  projectId: "clone-442b2",
  storageBucket: "clone-442b2.appspot.com",
  messagingSenderId: "103440677177",
  appId: "1:103440677177:web:284e4db90e284c946950e8",
  measurementId: "G-7V14SDYYHY",
};

const fireBaseApp = firebase.initializeApp(firebaseConfig);
const db = fireBaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
