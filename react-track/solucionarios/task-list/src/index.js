import React from 'react';
import ReactDOM from 'react-dom';
import * as firebase from 'firebase';

import './index.css';
import List from './List';
import Authentication from './Authentication';


/* Yes it's a global object, this is probably wrong, but it's used globally  ¯\_(ツ)_/¯ */
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
        
        /*We use bind to permanently bind this (App) to the function call */
        this.handleAuthStateChange = this.handleAuthStateChange.bind(this);
        firebase.auth().onAuthStateChanged(this.handleAuthStateChange);
    }
    
    handleAuthStateChange(User) {
        /* As simple as it gets */
        if (User) {
            this.setState({user:User});
        } else {
            this.setState({user:null});
        }
    }
    
    render() {
        if ( this.state.user !== null ) {
            /* We can only return one parent HTML element, that's why we wrap it in a <main> */
            return <main>
                {/*We don't need a full function for such a simple call, still it has to be a function */}
                <button type="button" onClick={()=>firebase.auth().signOut()}>Sign Out</button>
                <List user={this.state.user}/>
            </main>;
        } else {
            return <Authentication />;
        }
    }
    
}
// ========================================
ReactDOM.render( <App/>, document.getElementById('root') );