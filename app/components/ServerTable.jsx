import React from 'react';
import Server from './Server.jsx'

export default ({servers, titles}) => {

	return(
		<table border="1">
		    <tr>
		    {
		    	titles.map (title => 
		    		<th>{title}</th>
		    	)
		    }
		    </tr>
		    {
		    	servers.map(server =>
		    		<Server server={server} />
		    	)
		    }
		</table>
	)
}