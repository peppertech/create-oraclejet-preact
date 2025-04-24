import preactLogo from '../../assets/preact.svg';
import jetLogo from '../../assets/jetLogo.svg';
import './style.css';

export function Home() {
	return (
		<div class="home">
			<a href="https://preactjs.com" target="_blank">
				<img src={preactLogo} alt="Preact logo" height="160" width="160" />
			</a>
			 
			<a href="https://oracle.com/jet" target="_blank">
				<img src={jetLogo} alt="Oracle JET logo" height="160" width="160" />
			</a>
			<h1>Get Started building Vite-powered Preact and Oracle JET Apps </h1>
			<section>
				<Resource
					title="Learn Oracle JET"
					description="To learn more about Oracle JavaScript Extension Toolkit (JET), visit the VDOM Architecture page on the Oracle JET website"
					href="https://oracle.com/jet"
				/>
				<Resource
					title="Learn Preact"
					description="If you're new to Preact, try the interactive tutorial to learn important concepts"
					href="https://preactjs.com/tutorial"
				/>
				<Resource
					title="Learn Vite"
					description="To learn more about Vite and how you can customize it to fit your needs, take a look at their excellent documentation"
					href="https://vitejs.dev"
				/>
			</section>
		</div>
	);
}

function Resource(props) {
	return (
		<a href={props.href} target="_blank" class="resource">
			<h2>{props.title}</h2>
			<p>{props.description}</p>
		</a>
	);
}
