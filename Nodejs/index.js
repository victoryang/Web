const net = require ('net');
const PORT = 6123;

var server = net.createServer();

server.on('connection',(socket) => {
	console.log('A new client is connected from ',socket.remoteAddress,
		    'on local port ',socket.localPort);
	socket.on('data',(buffer) => {
		console.log('Received data from client:',buffer.toString());
	});
	socket.on('end', () => {
		console.log("Client quit");
	})
});

server.listen(PORT,() => {
	console.log('Server is running on port ',PORT);
});

server.on('error', (err) => {
	console.log('error happens');
	throw err;
})

