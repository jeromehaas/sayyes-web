import Paragraph from "components//content/paragraph/paragraph";
import { Paperclip, Check } from "react-feather";

const InputFile = ({ className, id, label, register, header = "test", errors, errorText, filename, value }) => {

	return (
				<div className={`${ className } input-file input-field`}>
            <label className="input-file__label input-field__label">{ label }</label>
            <input className="input-file__fake-input input-field__fake-input" type="file" id="file" name="file" filename={ filename } { ...register(id) } multiple="multiple" readOnly />
            <div className="input-file__input-container input-field__input-container input-container">
							<div className="input-container__header header">
									<Paragraph className="header__text">{ header }</Paragraph>
							</div>	
							<label className="input-container__action input-field__button" htmlFor="file">
								{ value 
									? <Check className="action__icon" />
									: <Paperclip className="action__icon" />
								}
							</label>
            </div>
            { errors && errors[id] && <p className="field__error">{ errorText }</p> }
        </div>
	);

};

export default InputFile;