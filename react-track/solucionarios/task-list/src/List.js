import React from "react";
//import * as firebase from 'firebase';

/** Component Structure:

- App
    + Authentication
    + List
        - AddForm
        - TasksList
            - Task
                + Editable // Next Deliverable
                + Presentable
**/

class List extends React.Component {
    
    render (){
        /* Please take note that this array is not a direct representation of what it is in stored in firebase
           We'll have to transform the data from object with propertynames, to a simple array with propertynames as ids.
        */
        const tasks = [
            {
                id: "1",
                order:1,
                text: "Example Task 1",
            },
            {
                id: "2",
                order:2,
                text: "Example Task 2",
            },
            {
                id: "3",
                order:3,
                text: "Example Task 3",
            },
        ];

        return (
            <section className="list">
                <AddForm />
                <TaskList tasks={tasks}/>
            </section>
        );
    }
}

class AddForm extends React.Component {
    render() {
        return (
            <div className="addForm">
                <input type="text" value="" />
                <button type="button">Add</button>
            </div>
        );
    }
}

class TaskList extends React.Component {
    render() {
        return (
            <div className="tasks">
                {this.props.tasks.map(task => (
                    <Task key={task.id} id={task.id} text={task.text} />
                ))}
            </div>
        );
    }
}

class Task extends React.Component {
    render() {
        return <div key={this.props.id} className="task">
        <input type="checkbox" id={this.props.id} />
        <label htmlFor={this.props.id}>{this.props.text}</label>
        </div>;
    }
}


export default List;