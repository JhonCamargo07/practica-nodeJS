const colors = require('colors');
const express = require('express');

const server = express();

server.get('/', (req, res) => {
	res.send('<h1>Hola mundo con Express y NodeJS</h1>');
	res.end();
});

server.listen(9000, () => {
	console.log(`Puerto: http://127.0.0.1:9000`.underline.black);
});
