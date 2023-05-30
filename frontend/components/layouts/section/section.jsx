import { forwardRef } from 'react';

const Section = forwardRef(({ children, className }, ref) => {
	return (
		<main className={ `${ className } section` } ref={ ref }>
			<div className={ `${ className }__inner section__inner` }>{ children }</div>
		</main>
	);

});

export default Section;
