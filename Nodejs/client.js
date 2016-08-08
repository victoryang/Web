const net = require('net');
const process = require('process');
const readline = require('readline').createInterface({
	input: process.stdin
});

var client = new net.Socket();

client.connect(6123,() => {
	console.log('Please input the data: ');
	readline.on('line',(buffer) => {
		client.write(buffer);
	});
}).on('error', (err) => {
	console.error('Error in connecting...');
	throw err
});


client.on('end', () => {
	console.log("Disconnected from client, exiting...");
	process.exit();
})
