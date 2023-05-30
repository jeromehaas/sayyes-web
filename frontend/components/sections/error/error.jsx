import Heading from 'components/content/heading/heading';
import Section from 'components/layouts/section/section';
import Paragraph from 'components/content/paragraph/paragraph';
import Button from 'components/content/button/button';
import { gsap } from 'gsap';
import { useEffect, useRef } from 'react';

const Error = () => {

	// SETUP REFS
	const errorRef = useRef();
	const errorTimelineRef = useRef();

	// SETUP TIMELINE
	useEffect(() => {
		const context = gsap.context(() => {
			errorTimelineRef.current = gsap.timeline();
			errorTimelineRef.current.to('.error .title__letter', { top: 0, stagger: 0.1, duration: 0.5, ease: 'back.out' }, 0.5);
			errorTimelineRef.current.to('.error .error__message', { opacity: 1, duration: 2, ease: 'back.out' }, 1.5);
			errorTimelineRef.current.to('.error .error__button', { opacity: 1, duration: 2, ease: 'back.out' }, 2);
		}, errorRef);
		return () => { return context.revert(); };
	}, []);

	return (
		<Section className="error" ref={ errorRef }>
			<Heading className="error__title title" level="h1">
				<span className="title__letter-wrapper"><span className="title__letter">S</span></span>
				<span className="title__letter-wrapper"><span className="title__letter">A</span></span>
				<span className="title__letter-wrapper"><span className="title__letter">Y</span></span>
				<span className="title__letter-wrapper"><span className="title__letter">N</span></span>
				<span className="title__letter-wrapper"><span className="title__letter">O</span></span>
				<span className="title__letter-wrapper"><span className="title__letter">!</span></span>
			</Heading>
			<div className="error__message message">
				<Paragraph className="message__item">Error 404!</Paragraph>
				<Paragraph className="message__item">Traumkleid nicht gefunden</Paragraph>
			</div>
			<Button className="error__button" href="/">zurück</Button>
		</Section>
	);

};

export default Error;
