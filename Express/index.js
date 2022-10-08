// import http from 'http';
const color = require('colors');
const fs = require('fs');
const indexRouter = require('./router.js');

// const handleServer = (req, res) => {
// 	const read = fs.createReadStream('./static/index.html');
// 	read.pipe(res);
// };

// const server = http.createServer((req, res) => {
// 	const read = fs.createReadStream('./static/index.html');
// 	read.pipe(res);
// });
// server.listen(3000, () => {
// 	console.log(`Link: http://127.0.0.1:3000`.blue);
// });

// console.log(`Server on port ${3000}`);

const express = require('express');

const app = express();

app.use(express.json());
app.use(express.text());

app.use(indexRouter);

app.listen(3000, () => {
	console.log(`Link: http://127.0.0.1:3000`.blue);
});
