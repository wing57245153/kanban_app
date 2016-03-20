import React from 'react';
import ServerTable from './ServerTable';

import ServerActions from '../actions/ServerActions';
import ServerStore from '../stores/ServerStore';


export default class ServerPage extends React.Component{
	constructor(props){
		super(props);

		this.state = ServerStore.getState();
	}

	componentDidMount() {
		ServerStore.listen(this.storeChanged);
	}

	componentDidUnMount() {
		ServerStore.unlisten(this.storeChanged);
	}


	storeChanged = (state) => {
		// console.log(this);
		this.setState(state);
	}

	render() {
		const servers = this.state.servers;
		const titles = this.state.titles;
		return(
            <div>
		        <ServerTable servers={servers} titles={titles}/>
		    </div>
		)
		
	}
}