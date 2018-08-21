import React from 'react';

function Tasks(props) {
    return (
        <div className="tasks">
        {props.tasks.map(task => (
            <Task key={task.id}
            id={task.id}
            text={task.text}
            done={task.done}
            onCheck={props.onCheck}
            onDelete={props.onDelete}/>
        ))}
        </div>
    );
}

function Task(props) {
    return (
        <div className="task" id={props.id}>
        <input type="checkbox"  onChange={props.onCheck} checked={props.done}/>
        <label htmlFor={props.id}>{props.text}</label>
        <div> <a href="#" onClick={props.onDelete}>delete</a></div>
        </div>
    );
}
export default Tasks;