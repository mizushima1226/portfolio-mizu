const express = require('express');
const next = require('next');
const routes = require('../routes');

//SERVICE
const authService = require('./services/auth');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = routes.getRequestHandler(app);

const secretData = [
	{
		title: 'SecretData 1',
		description: 'Plans how to build spaceship'
	},
	{
		title: 'SecretData 2',
		description: 'My secret passwards'
	}
];

app.prepare().then(() => {
	const server = express();

	//							Middlewareで認証の処理
	server.get('/api/vi/secret', authService.checkJWT, (req, res) => {
		return res.json(secretData);
	});

	server.all('*', (req, res) => {
		return handle(req, res);
	});

	//authService.checkJWTによる認証が通らなかった時の処理
	server.use(function(err, req, res, next) {
		if (err.name === 'UnauthorizedError') {
			res.status(401).send({
				title: 'Unauthorized',
				detail: 'Unauthorized Access!'
			});
		}
	});

	const PORT = process.env.PORT || 3000;
	server.use(handle).listen(PORT, err => {
		if (err) {
			console.log(err);
		}
		console.log(`> Ready on port ${PORT}`);
	});
});
