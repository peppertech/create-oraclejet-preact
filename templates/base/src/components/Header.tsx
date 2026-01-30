import { useLocation } from 'preact-iso';

export function Header() {
	const { url } = useLocation();

	return (
		<header>
			<nav>
				<a href="/" class={url == '/' && 'active'}>
					Dashboard
				</a>
				<a href="/customers" class={url == '/customers' && 'active'}>
					Customers
				</a>
				<a href="/about" class={url == '/about' && 'active'}>
					About
				</a>
				<a href="/testing" class={url == '/testing' && 'active'}>
					Testing
				</a>
			</nav>
		</header>
	);
}
