import { ChevronDown, ChevronUp, Check } from 'react-feather';
import Paragraph from 'components/content/paragraph/paragraph';
import { useEffect, useState, useRef } from 'react';

const InputSelection = ({ className, options, errors, id, label, validation, register, errorText, header, name, type, value }) => {

	// SETUP STATE
	const [isOpen, setIsOpen] = useState(false);

	// SETUP REFS
	const inputSelectionRef = useRef();

	// TOGGLE MENU
	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	// HANDLE CLICK OUTSIDE
	const handleClickOutside = (event) => {
		if (inputSelectionRef.current && !inputSelectionRef.current.contains(event.target)) setIsOpen(false);
	};

	// ADD EVENTLISTENER
	useEffect(() => {
		document.addEventListener('click', handleClickOutside);
		return () => { return document.removeEventListener('click', handleClickOutside); };
	}, []);

	return (
		<div className={ `${ className } input-selection input-field` } ref={ inputSelectionRef }>
			<label className="input-selection__label input-field__label">{ label }</label>
			<div className="input-selection__header header" onClick={ toggleMenu }>
				<Paragraph className="header__text">{ header }</Paragraph>
				{ value?.length
					? <Check className="header__icon" />
					: isOpen
						? <ChevronUp className="header__icon" />
						: <ChevronDown className="header__icon" />}
			</div>
			<div className={ `input-selection__menu menu ${ isOpen ? 'menu--visible' : 'menu--invisible'}` }>
				{ options.map((option) => {
					return (
						<div className="menu__item item" key={ option.id }>
							<input className="item__input" name={ name } id={ option.id } { ...register(id, validation) } value={ option.value } type={ type } />
							<label className="item__label" htmlFor={ option.id }>{ option.label }
								<Paragraph className="item__info">{ option.info }</Paragraph>
							</label>
						</div>
					);
				})}
			</div>
			{ errors[id] && <Paragraph className="input-selection__error input-field__error">{ errorText }</Paragraph> }
		</div>
	);

};

export default InputSelection;
