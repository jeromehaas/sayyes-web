import Lottie from "lottie-web";
import { useState, useEffect, useRef } from 'react';
import { useRouter } from "next/router";
import Link from "next/link";

const MobileNavigation = () => {

	const [ menuVisibility, setMenuVisibility ] = useState(false);
	const hamburgerRef = useRef();
	const hamburgerContainerRef = useRef();
	const router = useRouter();


	const handleClick = (event, link) => {
		event.preventDefault();
		router.push(link);
		setTimeout(() => {
			toggleHamburger();
			toggleMenu();
		}, 300);
	};

	const handleClose = () => {
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
				<Link className="bar__logo-link" href="/"><img className="bar__logo" src="/logos/logo-sayyes.svg" alt="Sayyes" /></Link>
				<div className="bar__hamburger" ref={ hamburgerContainerRef } onClick={ handleClose }></div>
			</div>
			<div className="mobile-navigation__menu menu">
				<Link className="menu__item" href="/" onClick={ (event) => handleClick(event, '/') }>Home</Link>
				<Link className="menu__item" href="/buy" onClick={ (event) => handleClick(event, '/buy') }>Kaufen</Link>
				<Link className="menu__item" href="/sell" onClick={ (event) => handleClick(event, '/sell') }>Verkaufen</Link>
				<Link className="menu__item" href="/about" onClick={ (event) => handleClick(event, '/about') }>Über Uns</Link>
				<Link className="menu__item" href="/collection" onClick={ (event) => handleClick(event, '/collection') }>Kollektion</Link>
			</div>
			<div className="mobile-navigation__placeholder"></div>
		</nav>
	);

};

export default MobileNavigation;