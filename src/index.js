import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import WebFont from 'webfontloader';
import { ConnectedRouter as Router } from 'connected-react-router';

import App from './application/App';
import configureStore, { history } from './redux/store';
import registerServiceWorker from './application/registerServiceWorker';

import './index.css';

WebFont.load({
	google: {
		families: ['Ubuntu:300,400,700', 'sans-serif']
	}
});

const store = configureStore();

ReactDOM.render(
<Provider store={store}>
	<Router history={history}>
		<App />
	</Router>
</Provider>, document.getElementById('root'));

registerServiceWorker();
