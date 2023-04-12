import Section from "components//layouts/section/section";
import Heading from "components//content/heading/heading";
import Picture from "components//content/picture/picture";
import Paragraph from "components//content/paragraph/paragraph";
import { useState } from 'react';

const Gallery = ({ data }) => {

    const handleNext = () => {
        const imagesLength = data[categoryIndex].attributes.images.data.length;
        const newIndex = (imageIndex + 1) >= imagesLength ? 0 : imageIndex + 1;
        setImageIndex(newIndex);
    };

    const handlePrevious = () => {
        const imagesLength = data[categoryIndex].attributes.images.data.length;
        const newIndex = (imageIndex - 1) <= 0 ? imagesLength - 1 : imageIndex - 1;
        setImageIndex(newIndex);
    };

    const handleClick = (index) => {
        setSliderIsVisible(true);
        setCategoryIndex(index);
    };

    const handleClose = () => {
        setSliderIsVisible(false);
        setImageIndex(0);
    }

    const [ sliderIsVisible, setSliderIsVisible ] = useState(false);
    const [ categoryIndex, setCategoryIndex ] = useState(0);
    const [ imageIndex, setImageIndex ] = useState(0);


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
                        <Heading className="item__heading" level="h2">{ image.attributes.name }</Heading>
                        <Picture  className="item__picture" src={ image.attributes.cover.data.attributes.formats.large.url } alt="image" figure={{ form: 'down', position: 'center', borderColor: 'blue' }}	 />
                    </div>
                ))}
            </div>
            { sliderIsVisible && (
                <div className="gallery__slider slider">
                    <div className="slider__header header">
                        <Heading className="header__heading">{ data[categoryIndex].attributes.name }</Heading>
                        <button className="header__back back" onClick={ handleClose }>
                            <img className="back__icon" src="/icons/slider/icon-close.svg" alt="Arrow" />
                        </button>      
                    </div>
                    <div className="slider__content"> 
                        <img className="content__navigation navigation--left" src="/icons/slider/icon-caret-left.svg" alt="Caret" onClick={ handlePrevious} />
                        <div className="content__container">
                            <img className="content__image" src={data[categoryIndex].attributes.images.data[imageIndex].attributes.formats.large.url } alt="Placeholder" />
                        </div>
                        <img className="content__navigation navigation--left" src="/icons/slider/icon-caret-right.svg" alt="Caret" onClick={ handleNext } />
                    </div>
                    <div className="slider__footer footer">
                        <div className="footer__download download">
                        </div>
                    </div>
                </div>
            )}
        </Section>
    );

};

export default Gallery;