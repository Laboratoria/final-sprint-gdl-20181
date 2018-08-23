import React from 'react';
import firebase from 'firebase';

import List from './List';
import Authentication from './Authentication';

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
    
    handleAuthStateChange(user) {
        /* As simple as it gets */
        if (user) {
            this.setState({user:user});
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

export default App;