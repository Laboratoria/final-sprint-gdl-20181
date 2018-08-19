import React from "react";
import "./Login.css";
import firebase from "firebase";

class Login extends React.Component {
    render(){
        return <div className="login">
            <label htmlFor="emailInput">Email:</label>
            <input id="emailInput" type="text" />
            <label htmlFor="passwordInput">Password:</label>
            <input id="passwordInput" type="password" />
            <input type="button" value="New User"/>
            <input type="button" value="Login"/>
        </div>;
    }
}

export default Login;