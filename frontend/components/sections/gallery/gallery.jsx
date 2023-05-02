import Section from "components//layouts/section/section";
import Heading from "components//content/heading/heading";
import Picture from "components//content/picture/picture";
import Paragraph from "components//content/paragraph/paragraph";
import { useState, useEffect, useRef } from 'react';
import Image from "next/image";

const Gallery = ({ data }) => {

		// SETUP REFS
		const sliderRef = useRef();

		// SETUP STATE
		const [ sliderIsVisible, setSliderIsVisible ] = useState(false);
		const [ categoryIndex, setCategoryIndex ] = useState(0);
		const [ imageIndex, setImageIndex ] = useState(0);
		const [ touchStart, setTouchStart ] = useState(0);
		const [ touchEnd, setTouchEnd ] = useState(0);

		// HANDLE NEXT
    const handleNext = () => {
      const imagesLength = data[categoryIndex].attributes.images.data.length;
      const newIndex = (imageIndex + 1) >= imagesLength ? 0 : imageIndex + 1;
      setImageIndex(newIndex);
    };

		// HANDLE PREVIOUS
    const handlePrevious = () => {
			const imagesLength = data[categoryIndex].attributes.images.data.length;
      const newIndex = (imageIndex - 1) <= 0 ? imagesLength - 1 : imageIndex - 1;
      setImageIndex(newIndex);
    };

		// HANDLE CLICK
    const handleClick = (index) => {
      setSliderIsVisible(true);
      setCategoryIndex(index);
			setImageIndex(0);
    };

		// HANDLE CLOSE
    const handleClose = () => {
      setSliderIsVisible(false);
      setImageIndex(0);
    };

		// HANDLE KEXPRESS
		const handleKeyPress = (event) => {
			if (event.key === 'ArrowLeft') handlePrevious();
			if (event.key === 'ArrowRight') handleNext();
			if (event.key === 'Escape') handleClose();
		};

	// HANDLE TOUCH START
	const handleTouchStart = (e) => {
		setTouchEnd(0);
		setTouchStart(e.targetTouches[0].clientX);
	};

	// HANDLE TOUCH MOVE
	const handleTouchMove = (e) => { 
		setTouchEnd(e.targetTouches[0].clientX);
	};

	// ADD EVENTLISTENER
	useEffect(() => {
		document.addEventListener('click', handleClickOutside);
		return () => document.removeEventListener('click', handleClickOutside);
	}, []);

	// HANDLE CLICK OUTSIDE
	const handleClickOutside = (event) => {
		if (event.target.classList.contains('slider__content') || event.target.classList.contains('slider__header') || event.target.classList.contains('content__container')) setSliderIsVisible(false);
	};

	// HANDLE TOUCH END
	const handleTouchEnd = () => {
			if (!touchStart || !touchEnd) return;
			const distance = touchStart - touchEnd;
			const isLeftSwipe = distance > 50;
			const isRightSwipe = distance < -50;
			if (isLeftSwipe) handlePrevious();
			if (isRightSwipe) handleNext();
	};
		
	// LISTEN ON KEYDOWN EVENT
	useEffect(() => {
		document.addEventListener('keydown', handleKeyPress);
		return () => document.removeEventListener('keydown', handleKeyPress);
	}, [imageIndex, categoryIndex]);

   return (
        <Section className="gallery">
            <Heading className="gallery__heading">Unsere Kollektion</Heading>
            <div className="gallery__text text">
                <Paragraph className="text__item">Bei der Auswahl unserer Brautkleider legen wir viel Wert auf hohe Qualität. Die Einzigartigkeit eines jeden Kleides steht dabei im Vordergrund. Von modernen und schlichten Ausführungen, über romantische Prinzessinen-Kleider bis hin zu extravaganten Couture-Modellen haben wir für jeden Geschmack etwas dabei. Unsere Kleider variieren in Grösse (34-42) und in Preis (300.- bis 5000.-).</Paragraph>
                <Paragraph className="text__item">Untenstehend findest du eine kleine Auswahl unseres Sortiments.</Paragraph>
                <Paragraph className="text__item">Folge SayYes auf Instagram, damit du stets über die neusten Zugänge informiert bist.</Paragraph>
            </div>
            <div className="gallery__collection collection">
                { data && data.map((image, index) => (
                    <div className="collection__item item" onClick={ () => handleClick(index) } key={ index }>
                        <Heading className="item__heading" level="h4">{ image.attributes.name }</Heading>
                        <Picture  className="item__picture" src={ image.attributes.cover.data.attributes.formats.large.url } alt="Brautkleid" figure={{ form: 'down', position: 'center', borderColor: 'blue' }}	 />
                    </div>
                ))}
            </div>
            { sliderIsVisible && (
                <div className="gallery__slider slider" onTouchStart={ handleTouchStart } onTouchMove={ handleTouchMove } onTouchEnd={ handleTouchEnd } ref={ sliderRef }>
                    <div className="slider__header header">
                        <Heading className="header__heading" level="h4">{ data[categoryIndex].attributes.name }</Heading>
                        <button className="header__back back" onClick={ handleClose }>
                            <Image className="back__icon" src="/icons/slider/icon-close.svg" alt="Arrow" width={ 24 } height={ 24 } />
                        </button>      
                    </div>
                    <div className="slider__content"> 
                        <img className="content__navigation navigation--left" src="/icons/slider/icon-caret-left.svg" alt="Caret" onClick={ handlePrevious} />
                        <div className="content__container">
                            <Image className="content__image" src={data[categoryIndex].attributes.images.data[imageIndex]?.attributes.formats.large.url } width={ 1800 } height={ 1200 } alt="Brautkleid" />
                        </div>
                        <img className="content__navigation navigation--right" src="/icons/slider/icon-caret-right.svg" alt="Caret" onClick={ handleNext } />
                    </div>
                </div>
            )}
        </Section>
    );

};

export default Gallery;