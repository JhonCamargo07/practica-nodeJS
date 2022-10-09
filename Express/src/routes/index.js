const { Router } = require('express');

const router = Router();

// router.use((req, res, next) => {
// 	console.log(`Rute: ${req.url} | Metodo: ${req.method}`);
// 	next();
// });

// router.use(morgan('dev'));

// router.use((req, res, next) => {
// 	if (req.query.login === 'jhon@camargo.com') {
// 		next();
// 	} else {
// 		res.send('No autorizado');
// 	}
// });

router.get('/dashboard', (req, res) => {
	res.send('Dashboard page');
});

router.get('/profile', (req, res) => {
	res.send('Profile page');
});

router.all('/about', (req, res) => {
	res.send('About page');
});

// router.use((req, res) => {
// 	res.status(404).send('Page no found');
// });

module.exports = router;
