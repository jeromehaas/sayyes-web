const InputSubmit = ({ className, label, onClick }) => {

	return (
		<div className={ `${ className } input-submit input-field` }>
			<input className="input-submit__input input-field__input" type="submit" value={ label } onClick={ onClick } />
		</div>
	);

};

export default InputSubmit;
