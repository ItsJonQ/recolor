import React from 'react';
import { Switch, Route } from 'react-router-dom';

import App from './App';
import Mixer from './Mixer';
import Router from '../components/Router';

export default function AppProvider() {
	return (
		<Router>
			<Switch>
				<Route path="/mixer" component={Mixer} />
				<Route path="/" component={App} />
			</Switch>
		</Router>
	);
}
