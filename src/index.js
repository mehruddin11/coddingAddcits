import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {AppProvider} from './context/context'
import { Auth0Provider } from "@auth0/auth0-react";
// dev-f3wqp5e0.us.auth0.com
// v7jDmuHL3BNAnk7doUIVMRMfgvHLrB3u
ReactDOM.render(
	<Auth0Provider
	domain="dev-f3wqp5e0.us.auth0.com"
	clientId="v7jDmuHL3BNAnk7doUIVMRMfgvHLrB3u"
	redirectUri={window.location.origin}
	cacheLocation='localstorage'
	
	>
	<AppProvider>
		
		<App />

	</AppProvider>
	</Auth0Provider>,
	document.getElementById('root')
);