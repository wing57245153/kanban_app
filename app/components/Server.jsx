import React from 'react';

export default class Server extends React.Component{
	constructor(props){
		super(props);
	}

    render() {
    	return this.renderServer();
    }

    renderServer() {
    	const server = this.props.server
    	return(
    		<tr id={server.id}>
    		    <td>{server.id}</td>
    		    <td>{server.name}</td>
    		    <td>{server.game_id}</td>
    		    <td>{server.open_time}</td>
    		    <td>{server.device_name}</td>
    		    <td>{server.platforms}</td>
    		    <td>{server.game_ip}</td>
    		    <td>{server.game_port}</td>
    		    <td>{server.http_port}</td>
    		    <td>{server.game_state}</td>
    		    <td>{server.game_mark}</td>
    		</tr>
    	)
    }

}