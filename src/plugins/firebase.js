import firebase from "firebase";

const config = {
  apiKey: "AIzaSyCdIHLR7N5JBTZdUhhS1lOf9Pn5-qs78Cg",
  authDomain: "form-for-union.firebaseapp.com",
  databaseURL: "https://form-for-union.firebaseio.com",
  projectId: "form-for-union",
  storageBucket: "form-for-union.appspot.com",
  messagingSenderId: "166977304028",
};
firebase.initializeApp(config);
export const functions = firebase.functions();