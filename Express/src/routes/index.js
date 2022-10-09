import { Router } from 'express';
import axios from 'axios';

const router = Router();

// router.use((req, res, next) => {
// 	console.log(`Rute: ${req.url} | Metodo: ${req.method}`);
// 	next();
// });

// router.use((req, res, next) => {
// 	if (req.query.login === 'jhon@camargo.com') {
// 		next();
// 	} else {
// 		res.send('No autorizado');
// 	}
// });

router.get('/posts', async (req, res) => {
	const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
	res.render('posts', { title: 'Data from API', response: response.data });
});

router.get('/', (req, res) => {
	let isActive = true;

	const users = [
		{
			id: 1,
			name: 'Jhon',
			lastname: 'Camargo',
		},
		{
			id: 2,
			name: 'Alexander',
			lastname: 'Cadena',
		},
		{
			id: 3,
			name: 'Jacc',
			lastname: 'Hernandez',
		},
		{
			id: 4,
			name: 'Alejandra',
			lastname: 'Giraldo',
		},
		{
			id: 5,
			name: 'Francia',
			lastname: 'Vivir sabroso',
		},
	];
	res.render('index', { title: 'index page', isActive, users });
});

router.get('/dashboard', (req, res) => {
	const title = 'My page with Express';
	res.render('dashboard', { title });
});

router.get('/profile', (req, res) => {
	const title = 'My page with Express';
	res.render('index', { title });
	// res.send('Profile page');
});

router.all('/users', (req, res) => {
	const title = 'My page with Express';
	res.render('users', { title });
});

router.use((req, res) => {
	res.status(404).send('Page no found');
});

export default router;
