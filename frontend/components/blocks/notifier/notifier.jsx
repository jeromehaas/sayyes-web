import Paragraph from 'components/content/paragraph/paragraph';
import { CheckCircle, AlertCircle } from 'react-feather';
import { useNotifierStore } from 'stores/notifier';

const Notifier = () => {

	// BRING IN STORE
	const { message, type, isVisible } = useNotifierStore();

	return (
		<div className={ `notifier ${ isVisible ? 'notifier--visible' : ''}` }>
			{ type === 'error' ? <AlertCircle className="notifier__icon" color="white" /> : <CheckCircle className="notifier__icon" color="white" /> }
			<Paragraph className="notifier__message paragraph--small">{ message }</Paragraph>
		</div>
	);

};

export default Notifier;
