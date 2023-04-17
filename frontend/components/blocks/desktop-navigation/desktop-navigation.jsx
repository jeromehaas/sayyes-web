import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/router";
import { gsap } from "gsap";

const DesktopNavigation = () => {

	// BRING IN ROUTER
	const router = useRouter();

	// SETUP REFS
	const desktopNavigationRef = useRef();

	// HANDLE SCROLL
	const handleScroll = () => {
		if (window.scrollY > 10) {
			gsap.context(() => {
				gsap.to('.desktop-navigation .desktop-navigation__bar', { height: '120px', duration: 0.05, ease: 'power4.inOut' })	
				gsap.to('.desktop-navigation .desktop-navigation__placeholder', { height: '120px', duration: 0.05, ease: 'power4.inOut' })	
				gsap.to('.desktop-navigation .bar__logo', { marginTop: '0px', marginBottom: '24px', height: '24px', duration: 0.05, ease: 'power4.inOut'})	
			}, desktopNavigationRef);
		} else {
			gsap.context(() => {
				gsap.to('.desktop-navigation .desktop-navigation__bar', { height: '200px', duration: 0.05, ease: 'power4.inOut' })	
				gsap.to('.desktop-navigation .desktop-navigation__placeholder', { height: '200px', duration: 0.05, ease: 'power4.inOut' })	
				gsap.to('.desktop-navigation .bar__logo', { marginTop: '40px', marginBottom: '40px', height: '40px', duration: 0.05, ease: 'power4.inOut'})	
			}, desktopNavigationRef);
		}
	};

	// ADD EVENTLISTENER ON FIRST RENDER
	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<nav className="desktop-navigation" ref={ desktopNavigationRef }>
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