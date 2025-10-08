import { render, h } from 'preact';
import { useEffect, useState } from "preact/hooks"
import { LocationProvider, Router, Route } from 'preact-iso';

import { Header } from './components/Header.jsx';
import { Home } from './pages/Home/index.jsx';
import { About } from './pages/About.js';
import './style.css';
import {
	RootEnvironment,
	RootEnvironmentProvider,
} from "@oracle/oraclejet-preact/UNSAFE_Environment";
import "@oracle/oraclejet-preact/Common/themes/redwood/theme.styles.css"
/* This is hardcoded to the en locale for now. TODO: workout how to do this with dynamic imports with rollup */
import * as eBundle from "../node_modules/@oracle/oraclejet-preact/es/resources/nls/en/bundle.js"

export function App() {
	const [translations, setTranslations] = useState(null);
	let env: any

	useEffect(() => {
		// Todo: determine the user's preferred locale.
		// For now, we are hard coding this
		const locale = "en";

		const loadTranslations = async () => {

			/** Dynamic imports don't work very well with Rollup. TODO: make this work in a way that rollup will like. */
			// const bundle = await import(
			// 	`../node_modules/@oracle/oraclejet-preact/es/resources/nls/${locale}/bundle.js`
			// );
			setTranslations(eBundle.default);
		};

		loadTranslations();
	}, []);

	if (translations) {
		const env: Partial<RootEnvironment> = {
			translations: { "@oracle/oraclejet-preact": translations },
			mode:"test"
		};
	}
	return (
		<RootEnvironmentProvider environment={env}>
			<LocationProvider>
				<Header />
				<main>
					<Router>
						<Route path="/" component={Home} />
						<Route default component={About} />
					</Router>
				</main>
			</LocationProvider>
		</RootEnvironmentProvider>
	);
}

render(<App />, document.getElementById('app'));
