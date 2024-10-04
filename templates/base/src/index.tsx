import { render, h } from 'preact';
import { useEffect, useState } from "preact/hooks"
import { LocationProvider, Router, Route } from 'preact-iso';

import { Header } from './components/Header.jsx';
import { Home } from './pages/Home/index.jsx';
import { NotFound } from './pages/_404.jsx';
import './style.css';
import {
	RootEnvironment,
	RootEnvironmentProvider,
} from "@oracle/oraclejet-preact/UNSAFE_Environment";

export function App() {
	const [translations, setTranslations] = useState(null);
	let env: any

	useEffect(() => {
		// Todo: determine the user's preferred locale.
		// For now, we are hard coding this
		const locale = "en";

		const loadTranslations = async () => {
			const bundle = await import(
				`@oracle/oraclejet-preact/resources/nls/${locale}/bundle`
			);
			setTranslations(bundle.default);
		};

		loadTranslations();
	}, []);

	if (translations) {
		const env: Partial<RootEnvironment> = {
			translations: { "@oracle/oraclejet-preact": translations },
		};
	}
	return (
		<RootEnvironmentProvider environment={env}>
			<LocationProvider>
				<Header />
				<main>
					<Router>
						<Route path="/" component={Home} />
						<Route default component={NotFound} />
					</Router>
				</main>
			</LocationProvider>
		</RootEnvironmentProvider>
	);
}

render(<App />, document.getElementById('app'));
