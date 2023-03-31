import Section from "components//layouts/section/section";
import Heading from "components//content/heading/heading";
import Picture from "components//content/picture/picture";
import Paragraph from "components//content/paragraph/paragraph";
import { useState } from 'react';

const Gallery = () => {

    const images = [
        'https://picsum.photos/id/237/200/300',
        'https://picsum.photos/id/238/300/300',
        'https://picsum.photos/id/239/400/300',
        'https://picsum.photos/id/240/500/300',
        'https://picsum.photos/id/241/500/300',
        'https://picsum.photos/id/242/500/300',
    ];

    const imagesLength = images.length;


    const handleNext = () => {
        const newIndex = (index + 1) >= imagesLength ? 0 : index + 1;
        setIndex(newIndex);
    };

    const handlePrevious = () => {
        const newIndex = (index - 1) <= 0 ? imagesLength - 1 : index - 1;
        setIndex(newIndex);
    };

    const handleClick = (index) => {
        setSliderIsVisible(true);
        setIndex(index);
    };

    const [ sliderIsVisible, setSliderIsVisible ] = useState(false);
    const [ index, setIndex ] = useState(0);

   return (
        <Section className="gallery">
            <Heading className="gallery__heading">Unsere Kollektion</Heading>
            <div className="gallery__text text">
                <Paragraph className="text__item">Bei der Auswahl unserer Brautkleider legen wir viel Wert auf hohe Qualität. Die Einzigartigkeit eines jeden Kleides steht dabei im Vordergrund. Von modernen und schlichten Ausführungen, über romantische Prinzessinen-Kleider bis hin zu extravaganten Couture-Modellen haben wir für jeden Geschmack etwas dabei. Unsere Kleider variieren in Grösse (34-42) und in Preis (300.- bis 5000.-).</Paragraph>
                <Paragraph className="text__item">Untenstehend findest du eine kleine Auswahl unseres Sortiments.</Paragraph>
                <Paragraph className="text__item">Folge SayYes auf Instagram, damit du stets über die neusten Zugänge informiert bist.</Paragraph>
            </div>
            <div className="gallery__collection collection">
                { images.map((image, index) => (
                    <div className="collection__item item" onClick={ () => handleClick(index) } key={ index }>
                        <Heading className="item__heading">The Rock-Chic </Heading>
                        <Picture  className="item__picture" src={ images[index]} alt="image" figure={{ form: "down", position: 'center', borderColor: 'grey' }}	 />
                    </div>
                ))}
            </div>
            { sliderIsVisible && (
                <div className="gallery__slider slider">
                    <div className="slider__header header">
                        <Heading className="header__heading">The Rock-Chic</Heading>
                        <button className="header__back back" onClick={ () => setSliderIsVisible(false) }>
                            <img className="back__icon" src="/icons/slider/icon-close.svg" alt="Arrow" />
                        </button>      
                    </div>
                    <div className="slider__content"> 
                        <img className="content__navigation navigation--left" src="/icons/slider/icon-caret-left.svg" alt="Caret" onClick={ handlePrevious} />
                        <div className="content__container">
                            <img className="content__image" src={ images[index] } alt="Placeholder" />
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