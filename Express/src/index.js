// import http from 'http';
const color = require('colors');
const fs = require('fs');
const indexRouter = require('./routes/index.js');
const fileRouter = require('./routes/files.js');
const path = require('path');
const morgan = require('morgan');

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

// Settings
// app.set('case sensitive routing', true);
app.set('appName', 'Express course');
app.set('port', 3000);

// Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(express.text());

// Routes
app.use(indexRouter);
app.use(fileRouter);

// Static files
app.use('/public', express.static(path.join(__dirname, './public')));
app.use('/uploads', express.static(path.join(__dirname, './uploads')));

// Run server
app.listen(app.get('port'), () => {
	console.log(`App '${app.get('appName')}' corriendo en el puerto ${app.get('port')}`.red);
	console.log(`Go to server: ${'http://127.0.0.1:3000'}`.blue);
});
