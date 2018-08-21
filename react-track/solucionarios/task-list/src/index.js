import React from 'react';
import ReactDOM from 'react-dom';
import * as firebase from 'firebase';

import './index.css';
import App from './App';


/* Yes it's a global object, this is probably wrong, but it's used globally  ¯\_(ツ)_/¯ */
firebase.initializeApp({
    apiKey: "AIzaSyBnQvpfn0AxM5IE89qk0GMGDhyWL7v2FAI",
    authDomain: "reacti-task-list.firebaseapp.com",
    databaseURL: "https://reacti-task-list.firebaseio.com",
    projectId: "reacti-task-list",
    storageBucket: "reacti-task-list.appspot.com",
    messagingSenderId: "119020033083"
});


// ========================================
ReactDOM.render( <App/>, document.getElementById('root') );