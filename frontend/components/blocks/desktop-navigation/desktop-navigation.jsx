import Link from 'next/link';
import { useEffect, useState, useRef } from 'react';
import { useRouter } from 'next/router';
import { gsap } from 'gsap';

const DesktopNavigation = () => {

	// BRING IN ROUTER
	const router = useRouter();

	// SETUP REFS
	const desktopNavigationRef = useRef();
	const desktopNavigationTimelineRef = useRef();

	// SETUP STATE
	const [scrollPosition, setScrollPosition] = useState(0);
	const [isAnimating] = useState(false);

	// SETUP TIMELINE
	useEffect(() => {
		const context = gsap.context(() => {
			desktopNavigationTimelineRef.current = gsap.timeline({ paused: true, duration: 0.25, transition: 'power4.inOut' });
			desktopNavigationTimelineRef.current.to('.desktop-navigation .desktop-navigation__bar', { height: '120px' }, 0);
			desktopNavigationTimelineRef.current.to('.desktop-navigation .desktop-navigation__placeholder', { height: '120px' }, 0);
			desktopNavigationTimelineRef.current.to('.desktop-navigation .bar__logo', { height: '24px', margin: '16px 0' }, 0);
		}, desktopNavigationRef);
		return () => { return context.revert(); };
	}, []);

	// UPDATE STLYLE
	useEffect(() => {
		if (isAnimating) return;
		if (scrollPosition > 20) { desktopNavigationTimelineRef.current.play(); }
		if (scrollPosition <= 20) { desktopNavigationTimelineRef.current.reverse(); }
	}, [scrollPosition]);

	// HANDLE SCROLL
	const handleScroll = () => {
		setScrollPosition(window.scrollY);
	};

	// ADD EVENTLISTENER ON FIRST RENDER
	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		return () => { return window.removeEventListener('scroll', handleScroll); };
	}, []);

	return (
		<nav className="desktop-navigation" ref={ desktopNavigationRef }>
			<div className="desktop-navigation__bar bar">
				<Link className="bar__logo-link" href="/"><img className="bar__logo" src="/logos/logo-sayyes.svg" alt="SAYYES" /></Link>
				<div className="bar__links">
					<Link className={ `links__item ${ router.pathname === '/' ? 'links__item--active' : '' }` } href="/">Home</Link>
					<Link className={ `links__item ${ router.pathname === '/buy' ? 'links__item--active' : '' }` } href="/buy">Kaufen</Link>
					<Link className={ `links__item ${ router.pathname === '/sell' ? 'links__item--active' : '' }` } href="/sell">Verkaufen</Link>
					<Link className={ `links__item ${ router.pathname === '/about' ? 'links__item--active' : '' }` } href="/about">About</Link>
					<Link className={ `links__item ${ router.pathname === '/collection' ? 'links__item--active' : '' }` } href="/collection">Kollektion</Link>
				</div>
			</div>
			<div className="desktop-navigation__placeholder" />
		</nav>
	);

};

export default DesktopNavigation;
