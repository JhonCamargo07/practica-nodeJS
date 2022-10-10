// import http from 'http';
// const fs = require('fs');
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

import path from 'path';
import color from 'colors';
import morgan from 'morgan';
import express from 'express';
import ejs from 'ejs';
import fileRouter from './routes/files.js';
import indexRouter from './routes/index.js';
import * as url from 'url';
import connectBD from './db.js';
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

connectBD();

const app = express();

// Settings
// app.set('case sensitive routing', true);
app.set('appName', 'Express course');
app.set('port', 51950);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(express.text());

// Routes
app.use(fileRouter);
app.use(indexRouter);

// Static files
app.use('/public', express.static(path.join(__dirname, './public')));
app.use('/uploads', express.static(path.join(__dirname, './uploads')));

// Run server
app.listen(app.get('port'), function () {
	console.log(`App '${app.get('appName')}' corriendo en el puerto ${app.get('port')}`.red);
	console.log(`Go to server: ${'http://127.0.0.1:'}${this.address().port.toString()}`.blue);
});
