//////
////服务器数据
///////
//"id":"1","name":"\u521d\u51fa\u8305\u5e90","game_id":"102","open_time":"2",
//"device_name":"Android","platforms":"0,33","game_ip":"203.195.178.147",
//"game_port":"8080","http_port":"8000","game_state":"2","game_mark":"2"

import alt from '../libs/alt';
import ServerActions from '../actions/ServerActions';
import request from 'superagent';

class ServerStore{
	constructor(){
		this.bindActions(ServerActions);
		var server = {};
		server.id = 1;
		server.name = "111";
		server.game_id = 102;
		server.open_time = 2;
		server.device_name = "Android";
		server.platforms = "0,33";
		server.game_ip = "203.195.178.147";
		server.game_port = 8080;
		server.http_port = 8000;
		server.game_state = 2;
		server.game_mark = 2;

		this.servers = [];

		this.titles = ["id", "name", "gameId", "openTime", 
		    "deviceName", "platforms", "gameIp", "gamePort", "httpPort",
		    "gameState", "gameMark"];

		this.init();

		// this.initServers(server);
	}

	init() {
		const servers = this.servers;
		const obj = this;
		var url = 'http://283.195.148.183/gcol/index2.php?service=Server.GetServerInfo&server_id=1';
        request
        .get(url)
        .end(function(err, response){
            console.log('Response ok:', response.ok);
            var json = eval("( " + response.text + ")")
            // console.log('Response text:', json.data.info);
            var server = json.data.info;

            // servers.concat(server);

            obj.initServers(server);
        });
	}

	initServers(server) {

		const servers = this.servers
		this.setState({
			servers: servers.concat(server)
		})
		// console.log(this);
	}

	create(server){

	}

	update(server){

	}

	delete(server){

	}
}

export default alt.createStore(ServerStore, 'ServerStore')