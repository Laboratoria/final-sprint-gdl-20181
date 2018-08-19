import React from "react";
import "./Login.css";
import firebase from "firebase";

class List extends React.Component {
    render (){
        return <h1>Logged in as {this.props.user}</h1>
    }
}
export default List;