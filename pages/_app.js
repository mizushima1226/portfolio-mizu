import '../styles/main.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = props => {
	const { Component, pageProps } = props;
	return <Component {...pageProps} />;
};

export default App;
