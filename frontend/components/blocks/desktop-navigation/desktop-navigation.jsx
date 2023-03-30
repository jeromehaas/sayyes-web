import Link from "next/link";
import { useEffect, useState} from "react";

const DesktopNavigation = () => {

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
				<img className="bar__logo" src="/logos/logo-sayyes.svg" />
				<div className="bar__links">
					<Link className="links__item" href="/">Home</Link>
					<Link className="links__item" href="/buy">Kaufen</Link>
					<Link className="links__item" href="/sell">Verkaufen</Link>
					<Link className="links__item" href="/">About</Link>
					<Link className="links__item" href="/">Kollektion</Link>
				</div>
			</div>
			<div className="desktop-navigation__placeholder"></div>
		</nav>
	);

};

export default DesktopNavigation;