import React from 'react';
import Note from './Note.jsx';

export default ({notes, onEdit}) => {

    return(
    	<ul>
    	    {notes.map(note => 
    	    	<li key={note.id}>
    	    	  <Note task={note.task} 
    	    	    id={note.id} 
    	    	    onEdit={onEdit} />
    	    	</li>
    	    )}
    	 </ul>
    )

}