import React from 'react';
import ReactDOM from 'react-dom';
import * as firebase from 'firebase';

// Initialize Firebase
var config = {
    apiKey: "AIzaSyBnQvpfn0AxM5IE89qk0GMGDhyWL7v2FAI",
    authDomain: "reacti-task-list.firebaseapp.com",
    databaseURL: "https://reacti-task-list.firebaseio.com",
    projectId: "reacti-task-list",
    storageBucket: "reacti-task-list.appspot.com",
    messagingSenderId: "119020033083"
};
firebase.initializeApp(config);

class List extends React.Component {
    render() {
      return (
        <ul>
          {this.props.items.map(item => (
            <li key={item.id}>{item.text}</li>
          ))}
        </ul>
      );
    }
  }

class App extends React.Component {
    render() {
        return (
            <div><h1>TodoList</h1></div>
            <main>
                <List />
            </main>
        );
    }
}



// ========================================

ReactDOM.render( <App/>, document.getElementById('root') );
