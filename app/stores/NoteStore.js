import uuid from 'node-uuid';
import alt from '../libs/alt';
import NoteActions from '../actions/NoteActions';

class NoteStore{
	constructor(){
		this.bindActions(NoteActions);
		this.notes = [];
	}

	create(note){
		const notes = this.notes;
		note.id = uuid.v4();

		
		this.setState({
			notes: notes.concat(note)
		});
	}

	update(updateNode){
		const notes = this.notes.map(note => {
			if(note.id === updateNode.id){
				return Object.assign({}, note, updateNode)
			}
			return note;
		});
		//{notes} is known as a an ES6 feature known as property shorthand. This is equivalent to {notes: notes}.
		this.setState({notes});
	}

	delete(id){
		this.setState({
			notes: this.notes.filter(note => note.id !== id)
		});
	}
}

export default alt.createStore(NoteStore, 'NoteStore');