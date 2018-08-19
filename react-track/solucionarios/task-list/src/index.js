import React from 'react';
import ReactDOM from 'react-dom';
import * as firebase from 'firebase';

import './index.css';
import List from './List';
import Authentication from './Authentication';

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
        
        this.handleAuthStateChange = this.handleAuthStateChange.bind(this);
        firebase.auth().onAuthStateChanged(this.handleAuthStateChange);
    }
    
    handleAuthStateChange(User) {
        if (User) {
            this.setState({user:User});
        } else {
            this.setState({user:null});
        }
    }
    
    render() {
        if ( this.state.user !== null ) {
            return <main>
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