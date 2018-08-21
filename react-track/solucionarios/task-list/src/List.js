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
		
		/** Tasks and AddForm events**/
		this.handleCheck = this.handleCheck.bind(this);
		this.handleDelete = this.handleDelete.bind(this);
		this.handleAddTask = this.handleAddTask.bind(this);
		
		/** Firebase events */
		this.handleChildAdded = this.handleChildAdded.bind(this);
		this.handleChildChanged = this.handleChildChanged.bind(this);
		this.handleChildRemoved = this.handleChildRemoved.bind(this);

		/** Reference for this user **/
		const db = firebase.database();
        this.tasksRef = db.ref().child(`tasks/${this.props.user.uid}`);
	}
	

	componentDidMount(){
		/** To avoid adding tasks to a not yet mounted component, we don't bind
	 	* the firebase callbacks until it mounts**/
		this.tasksRef.on('child_added', this.handleChildAdded);
		this.tasksRef.on('child_changed', this.handleChildChanged);
		this.tasksRef.on('child_removed', this.handleChildRemoved);
	}

	handleChildAdded(data){
		const newTask = data.val();
		newTask.id= data.key
		var newTasks = this.state.tasks.concat(newTask);
		this.setState({ tasks: newTasks })
	}

	handleChildChanged(data){
		/** We fill the new data with the needed data **/
		const newTask = data.val();
		newTask.id= data.key
		console.log(newTask);
		
		/** We create a copy of the array to be patched **/
		var newTasks = this.state.tasks.concat([]);
		const index = newTasks.findIndex(task=> task.id=== data.key);
		
		/** We insert the new task in place **/
		newTasks.splice(index,1,newTask);
		
		/** We finally rewrite the array**/
		this.setState({ tasks: newTasks })
	}

	handleChildRemoved(data){
		console.log(data.val());
		/** We create a copy of the array to be patched **/
		var newTasks = this.state.tasks.concat([]);
		const index = newTasks.findIndex(task=> task.id=== data.key);

		/** We remove the Task from the copy */
		newTasks.splice(index,1);
		
		/** We finally rewrite the array**/
		this.setState({ tasks: newTasks })
	}

	handleAddTask(text) {
		/** if text is empty, don't do anything **/
		if (!text.length) {
			return;
		}
		/** We generate the new reference and then insert the new key **/
        const key = this.tasksRef.push().key;
        this.tasksRef.child(key).set({
            text: text,
            done: false,
        });
	}
	
    handleCheck(e){
		/** The parent has the id **/
		const parent = e.target.closest('.task');
		const taskRef = this.tasksRef.child(parent.id);
		taskRef.update({
			done: e.target.checked
		});
	}
	handleDelete(e){
		e.preventDefault();
		/** The parent has the id **/
		const parent = e.target.closest('.task');
		const taskRef = this.tasksRef.child(parent.id);
		taskRef.remove();
	}
    
    render (){
        return (
            <section className="list">
            <AddForm onAdd={this.handleAddTask} />
            <Tasks  tasks={this.state.tasks} onDelete={this.handleDelete} onCheck={this.handleCheck}/>
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