import React from "react";
import firebase from "firebase";

class List extends React.Component {
    constructor(props){
        super(props);
    }
    
    render (){
        return <h1>Logged in as {this.props.user.email}</h1>
    }
}
export default List;