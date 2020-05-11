import React from 'react';
import App, { Container } from 'next/app';
import '../styles/main.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

import auth0 from '../services/auth0';

class MyApp extends App {
	static async getInitialProps({ Component, ctx }) {
		let pageProps = {};

		let user = process.browser
			? await auth0.clientAuth()
			: await auth0.serverAuth(ctx.req);

		if (Component.getInitialProps) {
			pageProps = await Component.getInitialProps(ctx);
		}

		const auth = { user, isAuthenticated: !!user };

		return { pageProps, auth };
	}

	render() {
		const { Component, pageProps, auth } = this.props;
		return <Component {...pageProps} auth={auth} />;
	}
}

export default MyApp;
