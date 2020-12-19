import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import WebFont from 'webfontloader';

import App from './application/App';
import rootReducer from './application/rootReducer';
import registerServiceWorker from './application/registerServiceWorker';

import './index.css';

WebFont.load({
	google: {
		families: ['Ubuntu:300,400,700', 'sans-serif']
	}
});

const store = createStore(rootReducer);

ReactDOM.render(<Provider store={store}>
	<App />
</Provider>, document.getElementById('root'));

registerServiceWorker();
