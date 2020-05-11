const jwt = require('express-jwt');
const jwksRsa = require('jwks-rsa');

//MIDDLEWARE
exports.checkJWT = jwt({
	secret: jwksRsa.expressJwtSecret({
		cache: true, // Default Value
		trateLimit: true,
		jwksRequestPerMinute: 15,
		jwksUri: 'https://dev-h6-lt5xv.auth0.com/.well-known/jwks.json'
	}),
	audience: 'H56DraiugehHf0uMHQwQe57P69VGRwZI', //ClientID
	issuer: 'https://dev-h6-lt5xv.auth0.com/', //Domain
	algorithms: ['RS256']
});
