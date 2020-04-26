import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
const config = {
  apiKey: "AIzaSyA1Rz8C_jsah1e6PdbYoNR2DaEl4H0hmh4",
    authDomain: "univchat-v1.firebaseapp.com",
    databaseURL: "https://univchat-v1.firebaseio.com",
};

firebase.initializeApp(config);

export const auth = firebase.auth;
export const db = firebase.database();
