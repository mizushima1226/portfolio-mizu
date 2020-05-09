import auth0 from 'auth0-js';

class Auth0 {
	constructor() {
		this.auth0 = new auth0.WebAuth({
			domain: 'dev-h6-lt5xv.auth0.com',
			clientID: 'H56DraiugehHf0uMHQwQe57P69VGRwZI',
			redirectUri: 'http://localhost:3000/callback',
			responseType: 'taken id_token',
			scope: 'openid prifile'
		});

		this.login = this.login.bind(this);
	}

	login() {
		this.auth0.authorize();
	}
}

const auth0Client = new Auth0();

export default auth0Client;
