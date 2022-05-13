const socket = new WebSocket('ws://localhost:9000/ws');

function connect(cb) {
	console.log('Connecting');

	socket.onopen = () => {
		console.log('Successfully connected');
	};

	socket.onmessage = msg => {
		console.log('Message from websocket:', msg);
		cb();
	};

	socket.onclose = event => {
		console.log('socket closed connection', event);
	};

	socket.onerror = error => {
		console.error('socket error', error);
	};
}

function send(msg) {
	console.log('sending msg', msg);
	socket.send(msg);
}

export function useSocket() {
	return {
		connect,
		send,
	};
}
