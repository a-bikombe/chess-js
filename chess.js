// Thanks to: https://stackabuse.com/how-to-start-a-node-server-examples-with-the-most-popular-frameworks/
"use strict";
// app.js

const http = require('http');

// chessboard function

function chessboard() {
	const size = 8;
	let one = " #";
	let two = "# ";
	let row = null;

	for (let i = 0; i < size; i++) {
	
		if (i % 2 == 0) {
		
			while (one.length < size) {
				row = one += one;
			}
		
		} else {
			while (two.length < size) {
				row = two += two;
			}
		
		}

		let boardstr += row;

	}
		
	return boardstr;
}

// Create an instance of the http server to handle HTTP requests
let app = http.createServer((req, res) => {
// Set a response type of plain text for the response
res.writeHead(200, {'Content-Type': 'text/plain'});

// Send back a response and end the connection
res.end(chessboard());
});

// Start the server on port 3000
app.listen(3000, '127.0.0.1');
console.log('Node server running on port 3000');