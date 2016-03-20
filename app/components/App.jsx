import React from 'react';
import Notes from './Notes.jsx';

import NoteActions from '../actions/NoteActions';
import NoteStore from '../stores/NoteStore';

export default class App extends React.Component{
  
  constructor(props){
  	super(props);

  	this.state = NoteStore.getState();
  }

  componentDidMount(){
  	NoteStore.listen(this.storeChanged);
  }

  componentDidUnMount(){
  	NoteStore.unlisten(this.storeChanged);
  }

  storeChanged = (state) => {
  	this.setState(state);
  }
 

  render() {
  //  return <Note />;
    const notes = this.state.notes;
    // console.log(notes);
    return (
    	<div>
    	  <button onClick={this.addNote}>+</button>
    	  <Notes notes={notes} 
    	    onEdit={this.editNode} 
    	    onDelete={this.deleteNode} />
    	</div>
    )
  }


  addNote = () => {
  	NoteActions.create({task: 'New task'});
  }

  editNode = (id, task) => {
  	if(!task.trim()){
  		return;
  	}

  	NoteActions.update({id, task});
  }

  deleteNode = (id, e) => {
  	e.stopPropagation();

  	NoteActions.delete(id);
  }

}








