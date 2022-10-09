const express = require('express');
const morgan = require('morgan');

const router = express();

router.set('case sensitive routing', true); // Rutas exactas

router.use(express.json());

let products = [
	{
		id: 1,
		name: 'Laptop',
		price: 3000,
	},
];

router.use(morgan('dev'));

router.get('/products', (req, res) => {
	res.json({ status: true, data: { products } });
});

router.post('/products', (req, res) => {
	const newProduct = { id: products.length + 1, ...req.body };
	products.push(newProduct);
	res.status(200).json({ status: true, data: { ...newProduct } });
});

router.put('/products/:id', (req, res) => {
	const newData = req.body;
	products = products.map((p) => (p.id === parseInt(req.params.id) ? { ...p, ...newData } : p));
	console.log(products);

	const productFound = products.find((product) => product.id === parseInt(req.params.id));

	if (productFound) {
		res.status(200).json({ status: true, data: { ...productFound } });
	} else {
		res.status(404).json({ status: false, message: 'Product no found', data: { ...productFound } });
	}
});

router.delete('/products/:id', (req, res) => {
	const productFound = products.find((product) => product.id === parseInt(req.params.id));

	products = products.filter((p) => p.id !== parseInt(req.params.id));

	if (productFound) {
		res.status(200).json({ status: true, data: { ...productFound } });
	} else {
		res.status(404).json({ status: false, message: 'Product no found', data: { ...productFound } });
	}
});

router.get('/products/:id', (req, res) => {
	const productFound = products.find((product) => product.id === parseInt(req.params.id));

	if (productFound) {
		res.status(200).json({ status: true, data: { ...productFound } });
	} else {
		res.status(404).json({ status: false, message: 'Product no found', data: { ...productFound } });
	}
});

router.use((req, res) => {
	res.status(404).send({ status: false, message: 'Product no found', data: { products } });
});

module.exports = router;
