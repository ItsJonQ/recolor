import React from 'react';

import App from './App';
import Router from '../components/Router';

export default function AppProvider() {
	return (
		<Router>
			<App />
		</Router>
	);
}
