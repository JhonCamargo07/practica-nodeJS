import { Router } from 'express';
import path from 'path';

const router = Router();

router.get('/modules', (req, res) => {
	res.sendFile('./public/node_modules.png', {
		root: path.join(__dirname, './../'),
	});
});

router.get('/senasoft', (req, res) => {
	res.sendFile('./public/SenaSoft.pdf', {
		root: path.join(__dirname, './../'),
	});
});

export default router;
