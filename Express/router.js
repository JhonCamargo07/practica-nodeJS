const { application } = require('express');
const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
	res.send('Hellow World');
});

router.all('/info', (req, res) => {
	res.send('Server info');
});

router.get('/senasoft', (req, res) => {
	res.sendFile('./static/SenaSoft.pdf', {
		root: __dirname,
	});
});

router.get('/user', (req, res) => {
	res.json({
		name: 'JhonCamargo07',
		age: '40',
		adrres: {
			city: 'new york',
			street: 'some stret 123',
		},
		points: [1, 2, 3],
	});
});

router.get('/isAlive', (req, res) => {
	res.sendStatus(204);
});
router.post('/user', (req, res) => {
	console.log(req.body);
	res.status(200).send('Nuevo usuario creado');
});

router.get('/hello/:user', (req, res) => {
	res.send(`Hello ${req.params.user}`);
});

router.get('/add/:x/:y', (req, res) => {
	const { x, y } = req.params;

	req.params.x = parseFloat(x);
	req.params.y = parseFloat(y);
	res.send(`La suma es: ${req.params.x + req.params.y}`);
});

router.get('/user/:name/photo', (req, res) => {
	console.log(`${req.params.name}`);
	if (req.params.name === 'node') {
		return res.sendFile('./static/node_modules.png', {
			root: __dirname,
		});
	}
	res.send('Phono no found, acces degenated');
});

router.get('/name/:name/age/:age', (req, res) => {
	const { name, age } = req.params;
	console.log(`${req.params}`);
	res.send(`El ususario ${name} tiene ${age} años`);
});

router.get('/search', (req, res) => {
	console.log(req.query);
	if (req.query.q === 'javascript books') {
		res.send('Lista de libros de JavaScript');
	} else {
		res.send('Página normal');
	}
});

router.use((req, res) => {
	res.status(404).send('Page no found');
});

module.exports = router;
