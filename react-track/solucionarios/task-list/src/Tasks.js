import React from 'react';

class Tasks extends React.Component {
    render() {
        return (
            <div className="tasks">
            {this.props.tasks.map(task => (
                <Task key={task.id}
                id={task.id}
                text={task.text}
                done={task.done}
                onCheck={this.props.handleCheck}/>
            ))}
            </div>
        );
    }
}

function Task(props) {
    return (
    <div className="task">
        <input type="checkbox" id={props.id} checked={props.done}/>
        <label htmlFor={props.id}>{props.text}</label>
    </div>
    );
}
export default Tasks;