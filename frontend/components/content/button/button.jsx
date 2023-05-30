import { Fragment } from 'react';
import Link from 'next/link';

const Button = ({ className, children, onClick, href }) => {

	return (
		<Fragment>
			{ href
				? <Link className={ `${ className } button` } href={ href }>{ children }</Link>
				: <button className={ `${ className } button` } onClick={ onClick } type="button">{ children }</button>}
		</Fragment>
	);

};

export default Button;
