import { render, h } from 'preact';
import { useEffect, useState } from "preact/hooks"
import { LocationProvider, Router, Route } from 'preact-iso';
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/preact-query";

import { Header } from './components/Header';
import Dashboard from './pages/Dashboard/index';
import Customers from './pages/Customers/index';
import About from './pages/About/index';
import Testing from './pages/Testing/index';
import './style.css';
import {
	RootEnvironment,
	RootEnvironmentProvider,
} from "@oracle/oraclejet-preact/UNSAFE_Environment";
import "@oracle/oraclejet-preact/Common/themes/redwood/theme.styles.css"
/* This is hardcoded to the en locale for now. TODO: workout how to do this with dynamic imports with rollup */
import * as eBundle from "../node_modules/@oracle/oraclejet-preact/es/resources/nls/en/bundle.js"

export function App() {
	const [env, setEnv] = useState(null);

	useEffect(() => {
		setEnv({
			translations: { "@oracle/oraclejet-preact": eBundle.default },
			mode: "test",
		});
	}, []);

	if (!env) {
		return null; // or a fallback/loading indicator
	}
	return (
		<RootEnvironmentProvider environment={env}>
			<LocationProvider>
				<Header />
				<main>
					<Router>
						<Route path="/" component={Dashboard} />
						<Route default component={Dashboard} />
						<Route path="/customers" component={Customers} />
						<Route path="/about" component={About} />
						<Route path="/testing" component={Testing} />
					</Router>
				</main>
			</LocationProvider>
		</RootEnvironmentProvider>
	);
}

render(<App />, document.getElementById('app'));
