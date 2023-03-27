import Paragraph from "components//content/paragraph/paragraph";

const InputText = ({ className, label, errorText, validation, register, type="text"  }) => {
    
    return (
        <div className={`${ className } input-text input-field`}>
            <label className="input-text__label input-field__label">{ label }</label>
            <input className="input-text__input input-field__input" type={ type } />
            <Paragraph className="input-text__error input-field__error">{ errorText }</Paragraph>
        </div>
    );

};

export default InputText;
