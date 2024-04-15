<script>
	import { page } from '$app/stores';
</script>

<header>
	<nav>
		<svg viewBox="0 0 2 3" aria-hidden="true">
			<path d="M0,0 L1,2 C1.5,3 1.5,3 2,3 L2,0 Z" />
		</svg>
		<ul>
			<li aria-current={$page.url.pathname === '/portfolio_svelte' ? 'page' : undefined}>
				<a href="/portfolio_svelte">Presentazione</a>
			</li>
			<li aria-current={$page.url.pathname === '/portfolio_svelte/Inglese' ? 'page' : undefined}>
				<a href="/portfolio_svelte/Inglese">Inglese</a>
			</li>
			<li aria-current={$page.url.pathname === '/portfolio_svelte/Diritto' ? 'page' : undefined}>
				<a href="/portfolio_svelte/Diritto">Diritto</a>
			</li>
			<li aria-current={$page.url.pathname === '/portfolio_svelte/Italiano' ? 'page' : undefined}>
				<a href="/portfolio_svelte/Italiano">Italiano</a>
			</li>
			<li aria-current={$page.url.pathname === '/portfolio_svelte/Informatica' ? 'page' : undefined}>
				<a href="/portfolio_svelte/Informatica">Informatica</a>
			</li>
			<li aria-current={$page.url.pathname === '/portfolio_svelte/Materie' ? 'page' : undefined}>
				<a href="/portfolio_svelte/Materie">Materie</a>
			</li>
		</ul>
		<svg viewBox="0 0 2 3" aria-hidden="true">
			<path d="M0,0 L0,3 C0.5,3 0.5,3 1,2 L2,0 Z" />
		</svg>
	</nav>
</header>

<style>
	header {
		display: flex;
		justify-content: center;
		position: fixed;
		top: 0;
  		width: 100%;
  		z-index: 100; /* Assicurati che il header sia sopra agli altri elementi */
  		transition: top 0.3s; /* Aggiunge una transizione per un effetto di scorrimento fluido */
	}

	nav {
		display: flex;
		justify-content: center;
		--background: rgb(0, 0, 0);
	}

	svg {
		width: 2em;
		height: 3em;
		display: block;
	}

	path {
		fill: var(--background);
	}

	ul {
		position: relative;
		padding: 0;
		margin: 0;
		height: 3em;
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
		background: var(--background);
		background-size: contain;
	}

	li {
		position: relative;
		height: 100%;
	}

	li[aria-current='page']::before {
		--size: 12px;
		content: '';
		width: 0;
		height: 0;
		position: absolute;
		bottom: 0;
		left: calc(50% - var(--size));
		transform: rotate(180deg);
		border: var(--size) solid transparent;
		border-top: var(--size) solid var(--color-theme-1);
	}

	nav a {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 0.5rem;
		color: var(--color-text);
		font-weight: 700;
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		text-decoration: none;
		transition: color 0.2s linear;
	}

	a:hover {
		color: var(--color-theme-1);
	}
</style>
