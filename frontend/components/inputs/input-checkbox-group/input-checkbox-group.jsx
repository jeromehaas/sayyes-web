import { ChevronDown } from "react-feather";
import Paragraph from 'components/content/paragraph/paragraph';
import { useState } from "react";

const InputCheckboxGroup = ({ className, options, label, header, name }) => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        console.log('click')
        setIsOpen(!isOpen);
    };

   return (
        <div className={`${ className } input-checkbox-group input-field`}>
            <label className="input-checkbox-group__label input-field__label">{ label }</label>
            <div className="input-checkbox-group__header header" onClick={ toggleMenu }>
                <Paragraph className="header__text">{ header }</Paragraph>
                <ChevronDown className="header__icon" />
            </div>
                <div className={`input-checkbox-group__menu menu ${ isOpen ? 'menu--visible' : 'menu--invisible'}`}>
                { options.map((option) => (
                    <div className="menu__item item" key={ option.id }>
                        <input className="item__input" name={ name } id={ option.id } value={ option.value } type="checkbox" />
                        <label className="item__label" htmlFor={ option.id }>{ option.label }</label>
                        <Paragraph className="item__info">{ option.info }</Paragraph>
                    </div>
                ))}
            </div>
        </div>
    );

};

export default InputCheckboxGroup;