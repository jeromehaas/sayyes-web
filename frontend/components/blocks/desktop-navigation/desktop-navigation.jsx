import Link from "next/link";
import { useEffect, useState} from "react";
import { useRouter } from "next/router";

const DesktopNavigation = () => {

	// BRING IN ROUTER
	const router = useRouter();

	// SETUP STATE TO TRACK SCROLL POSITION
	const [scrollPosition, setScrollPosition ] = useState(0);

	// HANDLE SCROLL
	const handleScroll = () => {
		setScrollPosition(window.scrollY);
	};

	// ADD EVENTLISTENER ON FIRST RENDER
	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
	}, [])

	return (
		<nav className={`desktop-navigation ${ scrollPosition > 10 ? 'desktop-navigation--small' : ''}`}>
			<div className="desktop-navigation__bar bar">
				<Link className="bar__logo-link" href="/"><img className="bar__logo" src="/logos/logo-sayyes.svg" /></Link>
				<div className="bar__links">
					<Link className={`links__item ${ router.pathname === '/' ? 'links__item--active' : '' }`} href="/">Home</Link>
					<Link className={`links__item ${ router.pathname === '/buy' ? 'links__item--active' : '' }`} href="/buy">Kaufen</Link>
					<Link className={`links__item ${ router.pathname === '/sell' ? 'links__item--active' : '' }`} href="/sell">Verkaufen</Link>
					<Link className={`links__item ${ router.pathname === '/about' ? 'links__item--active' : '' }`} href="/about">About</Link>
					<Link className={`links__item ${ router.pathname === '/collection' ? 'links__item--active' : '' }`} href="/collection">Kollektion</Link>
				</div>
			</div>
			<div className="desktop-navigation__placeholder"></div>
		</nav>
	);

};

export default DesktopNavigation;