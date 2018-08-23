import React from 'react';
import Task from './Task'

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

export default Tasks;