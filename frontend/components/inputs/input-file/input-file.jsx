import Paragraph from "components//content/paragraph/paragraph";
import { Paperclip, Check } from "react-feather";

const InputFile = ({ className, id, label, register, header = "test", errors, errorText, validation, filename, value }) => {

	return (
				<div className={`${ className } input-file input-field`}>
            <label className="input-file__label input-field__label">{ label }</label>
            <input className="input-file__fake-input input-field__fake-input" type="file" id="file" name="file" filename={ filename } { ...register(id, validation) } multiple="multiple" readOnly />
            <div className="input-file__input-container input-field__input-container input-container">
							<div className="input-container__header header">
									<Paragraph className="header__text">{ value?.length ? value.length > 1 ? `${ value.length } Bilder ausgewählt`: `${ value.length } Bild ausgewählt` : header }</Paragraph>
							</div>	
							<label className="input-container__action input-field__button" htmlFor="file">
								{ value?.length 
									? <Check className="action__icon" />
									: <Paperclip className="action__icon" />
								}
							</label>
            </div>
            { errors[id] && <Paragraph className="input-file__error input-field__error">{ errorText }</Paragraph> }
        </div>
	);

};

export default InputFile;