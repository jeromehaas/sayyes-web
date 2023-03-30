import Lottie from "lottie-web";
import { useState, useEffect, useRef } from 'react';
import Link from "next/link";

const MobileNavigation = () => {

	const [ menuVisibility, setMenuVisibility ] = useState(false);
	const hamburgerRef = useRef();
	const hamburgerContainerRef = useRef();

	const handleClick = () => {
		toggleHamburger();
		toggleMenu();
	};

	const toggleHamburger = () => {
		menuVisibility ? hamburgerRef.current.setDirection(-1) : hamburgerRef.current.setDirection(1);
		hamburgerRef.current.play();
	};
	
	const toggleMenu = () => {
		setMenuVisibility(!menuVisibility);
	};

	const createLottie = () => {
		hamburgerRef.current = Lottie.loadAnimation({
			container: hamburgerContainerRef.current,
			renderer: 'svg',
			loop: false,
			autoplay: false,
			path: '/lotties/lottie-hamburger.json',
		});
	};

	// CREATE LOTTIE
	useEffect(() => {
		createLottie();
		return () => hamburgerRef.current.destroy();
	}, []);

	// ADJUST SPEED OF ANIMATION
	useEffect(() => {
		hamburgerRef.current.setSpeed(2.5);
	}, [])

	return (
		<nav className={`mobile-navigation ${ menuVisibility ? 'mobile-navigation--active' : '' }`}>
			<div className="mobile-navigation__bar bar">
				<img className="bar__logo" src="/logos/logo-sayyes.svg" alt="Sayyes" />
				<div className="bar__hamburger" ref={ hamburgerContainerRef } onClick={ handleClick }></div>
			</div>
			<div className="mobile-navigation__menu menu">
				<Link className="menu__item" href="/" onClick={ handleClick }>Home</Link>
				<Link className="menu__item" href="/buy" onClick={ handleClick }>Kaufen</Link>
				<Link className="menu__item" href="/sell" onClick={ handleClick }>Verkaufen</Link>
				<Link className="menu__item" href="/" onClick={ handleClick }>Über Uns</Link>
			</div>
			<div className="mobile-navigation__placeholder"></div>
		</nav>
	);

};

export default MobileNavigation;