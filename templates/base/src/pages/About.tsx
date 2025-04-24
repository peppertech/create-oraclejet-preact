
import {Button} from "@oracle/oraclejet-preact/UNSAFE_Button"

export function About() {
	return (
		<section>
			<h1>404: Not Found</h1>
			<p>It's gone :(</p>
			<Button label='Click Me' onAction={() => alert("this was clicked")} variant='danger' />
		</section>
	);
}
