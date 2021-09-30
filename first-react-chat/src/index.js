import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import firebase from "firebase/compat";
import 'firebase/firestore';
import 'firebase/auth';


firebase.initializeApp({
    apiKey: "AIzaSyCip1KiE7u5iy--CcKiEwU7JPJQ1cH6-7c",
    authDomain: "react-chat-38e8c.firebaseapp.com",
    projectId: "react-chat-38e8c",
    storageBucket: "react-chat-38e8c.appspot.com",
    messagingSenderId: "510665063817",
    appId: "1:510665063817:web:c64af7af92e7015206f558",
    measurementId: "G-STMBDFHST4"
})

export const Context = createContext(null)

const auth = firebase.auth()
const firestore = firebase.firestore()


ReactDOM.render(
    <Context.Provider value={{
        firebase,
        auth,
        firestore
    }}>
        <App />
    </Context.Provider>,

  document.getElementById('root')
);