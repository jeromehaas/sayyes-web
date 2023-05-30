import Paragraph from 'components//content/paragraph/paragraph';
import { gsap } from 'gsap';
import { useEffect, useRef } from 'react';
import Cookies from 'js-cookie';

const IntroAnimation = () => {

	// SETUP REFS
	const introAnimationRef = useRef();
	const longIntroAnimationTimelineRef = useRef();
	const shortIntroAnimationTimelineRef = useRef();

	// SETUP LONG ANIMATION
	useEffect(() => {
		const context = gsap.context(() => {
			longIntroAnimationTimelineRef.current = gsap.timeline({ paused: true });
			longIntroAnimationTimelineRef.current.to('.intro-animation .title__letter', { top: 0, opacity: 1, stagger: 0.1, ease: 'back.out' }, 0.5);
			longIntroAnimationTimelineRef.current.to('.intro-animation .content__subtitle', { opacity: 1 }, 2);
			longIntroAnimationTimelineRef.current.to('.intro-animation .title', { opacity: 0 }, 4);
			longIntroAnimationTimelineRef.current.to('.intro-animation .content__subtitle', { opacity: 0 }, 4.25);
			longIntroAnimationTimelineRef.current.to('.intro-animation .intro-animation__inner', { opacity: 0, duration: 2 }, 5);
			longIntroAnimationTimelineRef.current.to('.intro-animation .intro-animation__inner', { display: 'none', duration: 0 }, 7);
		}, introAnimationRef);
		return () => { return context.revert(); };
	}, []);

	// SETUP SHORT ANIMATION
	useEffect(() => {
		const context = gsap.context(() => {
			shortIntroAnimationTimelineRef.current = gsap.timeline({ paused: true });
			shortIntroAnimationTimelineRef.current.to('.intro-animation .intro-animation__inner', { opacity: 0, duration: 0 }, 0);
			shortIntroAnimationTimelineRef.current.to('.intro-animation .intro-animation__inner', { display: 'none', duration: 0 });
		}, introAnimationRef);
		return () => { return context.revert(); };
	}, []);

	// PLAY SHORT OR LONG ANIMATION
	useEffect(() => {

		// CHECK COOKIE TO SEE WHEN ANIMATION WAS RENDERED LAST
		const lastSeen = Cookies.get('intro-animation-last-seen');
		const now = Date.now();
		const oneWeek = 24 * 60 * 60 * 1000;

		// IF NO COOKIE IS AVAILABLE OR IS SET LONGER THAN A WEEK AGO PLAY THE LONG ANIMATION
		if (!lastSeen || now - lastSeen > oneWeek) {
			longIntroAnimationTimelineRef.current.play();
			Cookies.set('intro-animation-last-seen', now);

			// IF THE COOKIE IS SET WITHING THE LAST WEEK PLAY THE SHORT ANIMATION
		} else {
			shortIntroAnimationTimelineRef.current.play();
		};

	}, []);

	return (
		<div className="intro-animation" ref={ introAnimationRef }>
			<div className="intro-animation__inner">
				<div className="intro-animation__content content">
					<Paragraph className="content__title title">
						<span className="title__letter">S</span>
						<span className="title__letter">A</span>
						<span className="title__letter">Y</span>
						<span className="title__letter">Y</span>
						<span className="title__letter">E</span>
						<span className="title__letter">S</span>
					</Paragraph>
					<Paragraph className="content__subtitle">SECONDHAND BRAUTMODE</Paragraph>
				</div>
			</div>
		</div>
	);
};

export default IntroAnimation;
