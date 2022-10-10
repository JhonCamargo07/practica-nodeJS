import mysql from 'mysql2/promise';

async function connectBD() {
	const connection = await mysql.createConnection({
		host: 'us-east.connect.psdb.cloud',
		user: 'p125mwfz02adas2nmvjs',
		password: 'pscale_pw_6MBw7Kw0INqunly2vYcNlLBkf2Yj2i1Hdz1M89LQM3H',
		database: 'expressdb',
		ssl: {
			rejectUnauthorized: false,
		},
	});

	let result = '';

	try {
		result = await connection.query('select * from users');
	} catch (error) {
		result = {
			status: false,
			data: {
				message: error,
			},
		};
	}
	console.log(result);
}
export default connectBD;
