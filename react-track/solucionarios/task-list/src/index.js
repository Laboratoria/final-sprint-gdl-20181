import React from 'react';
import ReactDOM from 'react-dom';
import * as firebase from 'firebase';

import './index.css';
import List from './List';
import Login from './Login';

// Initialize Firebase
firebase.initializeApp({
    apiKey: "AIzaSyBnQvpfn0AxM5IE89qk0GMGDhyWL7v2FAI",
    authDomain: "reacti-task-list.firebaseapp.com",
    databaseURL: "https://reacti-task-list.firebaseio.com",
    projectId: "reacti-task-list",
    storageBucket: "reacti-task-list.appspot.com",
    messagingSenderId: "119020033083"
});

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            user: null,
        }
    }
    
    render() {
        if ( this.state.user!==null ) {
            return <List user={this.state.user}/>;
        } else {
            return <Login />;
        }
    }
    
}
// ========================================
ReactDOM.render( <App />, document.getElementById('root') );
