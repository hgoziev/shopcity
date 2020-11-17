import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCDjsLQDvlHhsZN1xMhNiMunoBDnLJirYA",
  authDomain: "shopcity-15333.firebaseapp.com",
  databaseURL: "https://shopcity-15333.firebaseio.com",
  projectId: "shopcity-15333",
  storageBucket: "shopcity-15333.appspot.com",
  messagingSenderId: "1040754164199",
  appId: "1:1040754164199:web:0285c77f82dd08bd43fd42",
  measurementId: "G-CMLJQBG0LC",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
