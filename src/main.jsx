import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { useRoutes } from 'react-router-dom';
import AppProviders from '~/providers';
import routes from '~react-pages'; // eslint-disable-line import/no-unresolved -- virtual plugin

import '@unocss/reset/tailwind.css';
import 'uno.css'; // eslint-disable-line import/no-unresolved -- virtual plugin
// import './styles/global.css';

/**
 * All routes
 */
function AppRoutes() {
	return useRoutes(routes);
}

const App = (
	<StrictMode>
		<AppProviders>
			<AppRoutes />
		</AppProviders>
	</StrictMode>
);

const root = document.getElementById('root');
createRoot(root).render(App);
