import React from 'react';

class Task extends React.Component{
    constructor(props) {
        super(props);

    }
    
    render(){
        return (
            <div className="task" id={this.props.id}>
            <input type="checkbox" id={`label-${this.props.id}`} onChange={this.props.onCheck} checked={this.props.done}/>
            <label htmlFor={`label-${this.props.id}`}>{this.props.text}</label>
            <div> <a href="#" onClick={this.props.onEdit}>edit</a> || <a href="#" onClick={this.props.onDelete}>delete</a></div>
            </div>
        );
    }

}
export default Task;