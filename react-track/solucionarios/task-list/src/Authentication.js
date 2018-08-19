import React from "react";
import firebase from "firebase";

class Authentication extends React.Component {

    constructor(props){
        super(props);
        this.state={
            emailInput: "",
            passwordInput:"",
            error:"",
        }
        this.handleCreate      = this.handleCreate.bind(this);
        this.handleSignIn      = this.handleSignIn.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        
    }

    render(){
        //We create a custom message if there is an error
        const error = this.state.error ? <div className="alert">{this.state.error}</div> : null;
        
        return <div className="authentication">
            {error}
            <label htmlFor="emailInput">Email:</label>
            <input id="emailInput" type="text" value={this.state.emailInput} onChange={this.handleInputChange} />
            <label htmlFor="passwordInput">Password:</label>
            <input id="passwordInput" type="password" value={this.state.passwordInput} onChange={this.handleInputChange} />
            <input type="button" value="New User" onClick={this.handleCreate} />
            <input type="button" value="Sign In" onClick={this.handleSignIn} />
        </div>;
    }
    
    handleCreate(){
        firebase.auth()
        .createUserWithEmailAndPassword(this.state.emailInput, this.state.passwordInput)
        .catch( (error) => {
            this.setState({error: error.message});
        });
    }

    handleSignIn(){
        firebase.auth()
        .signInWithEmailAndPassword(this.state.emailInput, this.state.passwordInput)
        .catch( (error) => {
            this.setState({error: error.message});
        });
    }

    //Generic function to enable binding of values to any input
    handleInputChange(event){
        //event.target.id == emailInput as in this.state.emailInput
        this.setState({ [event.target.id]: event.target.value });
    }

}

export default Authentication;