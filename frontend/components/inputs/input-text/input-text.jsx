import Paragraph from 'components//content/paragraph/paragraph';

const InputText = ({ className, id, label, errorText, validation, register, errors, type = 'text' }) => {

	return (
		<div className={ `${ className } input-text input-field` }>
			<label className="input-text__label input-field__label">{ label }</label>
			<input className="input-text__input input-field__input" { ...register(id, validation) } type={ type } />
			{ errors[id] && <Paragraph className="input-text__error input-field__error">{ errorText }</Paragraph> }
		</div>
	);

};

export default InputText;
