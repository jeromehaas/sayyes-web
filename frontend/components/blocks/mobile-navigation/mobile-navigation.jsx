import Lottie from "lottie-web";
import { useState, useEffect, useRef } from 'react';
import { useRouter } from "next/router";
import Link from "next/link";
import { gsap } from "gsap";

const MobileNavigation = () => {

	// SETUP  STATE
	const [ isVisible, setIsVisible ] = useState(false);
	const hamburgerRef = useRef();
	const mobileNavigationRef = useRef();
	const mobileNavigationTimelineRef = useRef();

	// SETUP REFS
	const hamburgerContainerRef = useRef();

	// BRING IN ROUTER
	const router = useRouter();

	// NAVIGATE
	const navigate = (event, link) => {
		event.preventDefault();
		router.pathname === link ? toggleNavigation() : router.push(link);
	};

	// CLOSE NAVIGATION
	const toggleNavigation = () => {
		setIsVisible(!isVisible);
		toggleHamburger();
		toggleMenu();
	};

	// TOGGLE HAMBURGER
	const toggleHamburger = () => {
		isVisible ? hamburgerRef.current.setDirection(-1) : hamburgerRef.current.setDirection(1);
		hamburgerRef.current.play();
	};
	
	// TOGGLE MENU
	const toggleMenu = () => {
		isVisible ? mobileNavigationTimelineRef.current.reverse() : mobileNavigationTimelineRef.current.play();;
	};

	// CREATE LOTTIE
	useEffect(() => {
		hamburgerRef.current = Lottie.loadAnimation({
			container: hamburgerContainerRef.current,
			renderer: 'svg',
			loop: false,
			autoplay: false,
			path: '/lotties/lottie-hamburger.json',
		});
		hamburgerRef.current.setSpeed(2.5);
		return () => hamburgerRef.current.destroy();
	}, []);

	// CREATE MENU NAVIGATION
	useEffect(() => {
		const context = gsap.context(() => {
			mobileNavigationTimelineRef.current = gsap.timeline({ paused: true });
			mobileNavigationTimelineRef.current.to('.mobile-navigation .menu', { bottom: '0%', duration: 0.5 }, 0)
			mobileNavigationTimelineRef.current.to('.mobile-navigation .menu__item', { opacity: '100%', left: 0, stagger: 0.1, duration: 0.5 }, 1)
		}, mobileNavigationRef)
		return () => context.revert();
	}, []);

	return (
		<nav className="mobile-navigation" ref={ mobileNavigationRef }>
			<div className="mobile-navigation__bar bar">
				<Link className="bar__logo-link" href="/"><img className="bar__logo" src="/logos/logo-sayyes.svg" alt="Sayyes" /></Link>
				<div className="bar__hamburger" ref={ hamburgerContainerRef } onClick={ toggleNavigation }></div>
			</div>
			<div className="mobile-navigation__menu menu">
				<Link className="menu__item" href="/" onClick={ (event) => navigate(event, '/') }>Home</Link>
				<Link className="menu__item" href="/buy" onClick={ (event) => navigate(event, '/buy') }>Kaufen</Link>
				<Link className="menu__item" href="/sell" onClick={ (event) => navigate(event, '/sell') }>Verkaufen</Link>
				<Link className="menu__item" href="/about" onClick={ (event) => navigate(event, '/about') }>Über Uns</Link>
				<Link className="menu__item" href="/collection" onClick={ (event) => navigate(event, '/collection') }>Kollektion</Link>
			</div>
			<div className="mobile-navigation__placeholder"></div>
		</nav>
	);

};

export default MobileNavigation;