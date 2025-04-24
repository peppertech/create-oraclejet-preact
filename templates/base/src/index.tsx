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
import "@oracle/oraclejet-preact/Common/themes/redwood/theme.css"

export function App() {
	const [translations, setTranslations] = useState(null);
	let env: any

	useEffect(() => {
		// Todo: determine the user's preferred locale.
		// For now, we are hard coding this
		const locale = "en";

		const loadTranslations = async () => {
			const bundle = await import(
				`../node_modules/@oracle/oraclejet-preact/es/resources/nls/${locale}/bundle.js`
			);
			setTranslations(bundle.default);
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
