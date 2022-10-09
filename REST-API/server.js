const express = require('express');
const colors = require('colors');
const router = require('./routes/index');

const app = express();

// Settings
app.set('appName', 'Express course');
app.set('port', 3000);

// console.log(app.get('appName'));
// Routes
app.use(router);

app.listen(app.get('port'), () => {
	console.log(`App '${app.get('appName')}' corriendo en el puerto ${app.get('port')}`.red);
	console.log(`Go to server: ${'http://127.0.0.1:3000'}`.blue);
});
