const InputSubmit = ({ className, label, onClick, isLoading }) => {

	return (
		<div className={ `${ className } input-submit input-field` } onClick={ onClick }>
			<input className="input-submit__input input-field__input" type="submit" value={ label } disabled={ isLoading } />
			{ isLoading ?	<div className="input-submit__loader" /> : null }
		</div>
	);

};

export default InputSubmit;
