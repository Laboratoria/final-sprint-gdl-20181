import React from 'react';
import Tasks from './Tasks';
import firebase from 'firebase';
//import * as firebase from 'firebase';

/** Component Structure:

- App
+ Authentication
+ List
- AddForm
- Tasks
- Task // Currently presenting the presentable state
+ Editable // Next Deliverable
+ Presentable // Next Deliverable
**/

class List extends React.Component {
    constructor(props){
        super(props);
        
        /* Please take note that this array is not a direct representation of what it is in stored in firebase
        We'll have to transform the data from object with propertynames, to a simple array with propertynames as ids.
        */
        this.state= {
            tasks: [],
        }
		
        this.handleCheck = this.handleCheck.bind(this);
		this.handleAddTask = this.handleAddTask.bind(this);
		this.handleNewChild = this.handleNewChild.bind(this);
	}
	
	componentDidMount(){
		const db = firebase.database();
        this.tasksRef = db.ref().child(`tasks/${this.props.user.uid}`);
        this.tasksRef.on('child_added', this.handleNewChild);
	}

	handleNewChild(data){
		const newTask = data.val();
		newTask.id= data.key
		var newTasks = this.state.tasks.concat(newTask);
		this.setState({ tasks: newTasks })
	}

	handleAddTask(text) {
		if (!text.length) {
			return;
		}
        const key = this.tasksRef.push().key;
        this.tasksRef.child(key).set({
            text: text,
            done: false,
        });
	}
	
    handleCheck(e){
        /**TODO **/
    }
    
    render (){
        return (
            <section className="list">
            <AddForm onAdd={this.handleAddTask} />
            <Tasks  tasks={this.state.tasks} onCheck={this.handleCheck}/>
            </section>
        );
    }
}

class AddForm extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			value:""
		}

		this.handleChange = this.handleChange.bind(this);
		this.handleKeyUp = this.handleKeyUp.bind(this);
		this.handleClick = this.handleClick.bind(this);
	}

	handleChange(e){
		this.setState({value:e.target.value});
	}

	handleKeyUp(e){
		if(e.keyCode===13) this.handleClick();
	}
	
	handleClick(){
		this.props.onAdd(this.state.value);
		this.setState({value:""});
	}

	render(){
		return (
			<div className="addForm">
				<input type="text" onKeyUp={this.handleKeyUp} onChange={this.handleChange} value={this.state.value} />
				<button type="button"  onClick={this.handleClick}>Add</button>
			</div>
		);
	}
}

export default List;