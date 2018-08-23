import React from 'react';
import './task.css';

class Task extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            editing: false,
            text: this.props.text,
        }
        this.makeEditable= this.makeEditable.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleEdit = this.handleEdit.bind(this);      
    }
    
    handleInputChange(e){
        this.setState({text: e.target.value});
    }

    makeEditable(e) {
        e.preventDefault();
        this.setState({editing: true});
    }
    
    handleCancel(e) {
        e.preventDefault();
        this.setState({editing: false});
    }

    handleEdit(e){
        e.preventDefault();
        this.props.onEdit(this.state.text, this.props.id);
        this.setState({editing:false});
    }

    /*componentDidMount(){
        this.nameInput.focus(); 
     }*/

    render(){
        if(this.state.editing){
            return (
                <div className="task" id={this.props.id}>
                    <input type="text" autoFocus value={this.state.text} onChange={this.handleInputChange}/><br/>
                    <div className="button-bar"> <a href="#" onClick={this.handleCancel}>cancel</a> || <a href="#" onClick={this.handleEdit}>save</a></div>
                </div>
            );
        } else {
            return (
                <div className="task" id={this.props.id}>
                    <input type="checkbox" id={`label-${this.props.id}`} onChange={this.props.onCheck} checked={this.props.done}/>
                    <label htmlFor={`label-${this.props.id}`}>{this.props.text}</label><br/>
                    <div className="button-bar"> <a href="#" onClick={this.makeEditable}>edit</a> || <a href="#" onClick={this.props.onDelete}>delete</a></div>
                </div>
            );
        }
    }

}
export default Task;