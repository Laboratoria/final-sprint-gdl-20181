import React from 'react';

function Tasks(props) {
    return (
        <div className="tasks">
        {props.tasks.map(task => (
            <Task key={task.id}
            id={task.id}
            text={task.text}
            done={task.done}
            onCheck={props.onCheck}/>
        ))}
        </div>
    );
}

function Task(props) {
    return (
        <div className="task">
        <input type="checkbox" id={props.id} onChange={props.onCheck} checked={props.done}/>
        <label htmlFor={props.id}>{props.text}</label>
        </div>
    );
}
export default Tasks;