import Section from 'components//layouts/section/section';
import Heading from 'components//content/heading/heading';
import Picture from 'components//content/picture/picture';
import InputText from 'components//inputs/input-text/input-text';
import InputFile from 'components//inputs/input-file/input-file';
import InputSubmit from 'components//inputs/input-submit/input-submit';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { useNotifierStore } from 'stores/notifier';

const SellForm = () => {

	// BRING IN STORE
	const { showNotifier } = useNotifierStore();

	// BRING IN REACT-HOOK-FORM
	const { register, handleSubmit, reset, formState, watch, getValues } = useForm();

	// GET VALUES
	const values = getValues();

	// OBSERVE FILES
	watch(['picture']);

	// HANDLE DISPATCH
	const handleDispatch = async () => {

		// INITIALIZE FORM DATA
		const submission = new FormData();

		// APPEND FILES
		for (let i = 0; i < values?.picture?.length; i++) {
			submission.append('files.picture', values.picture[i]);
		};

		// APPEND DATA
		submission.append('data', JSON.stringify({
			firstname: values.firstname,
			lastname: values.lastname,
			street: values.street,
			town: values.town,
			email: values.email,
			phone: values.phone,
			brand: values.brand,
			buyDate: values['buy-date'],
			size: values.size,
			originalPrice: values['original-price'],
			sellPrice: values['sell-price'],
		}));

		// DISPATCH FORM SUBMISSION
		const response = await axios.post(`${ process.env.NEXT_PUBLIC_BACKEND_BASE_URL }/api/dress-requests`, submission);

		// HANDLE SUCCESS CASE
		if (response.status === 200) {
			showNotifier({ message: 'Die Nachricht wurde erfolgreich übermittelt', type: 'success', isVisible: 'true' });
			reset();

		// HANDLE ERROR CASE
		} else {
			showNotifier({ message: 'Die Nachricht konnte nicht übermittelt werden', type: 'error', isVisible: 'true' });
		};

	};

	return (
		<Section className="sell-form">
			<form className="sell-form__container container" onSubmit={ handleSubmit(() => { return handleDispatch(); }) }>
				<Heading className="container__heading">Kontakt</Heading>
				<Picture className="container__picture" src="/images/general/general-04.webp" alt="Brautkleid" figure={ { form: 'down', position: 'top-left', borderColor: 'grey' } }	 />
				<fieldset className="container__personal-data personal-data">
					<Heading className="personal-data__heading" level="h3">Personalien</Heading>
					<InputText className="personal-data__input personal-data__input--firstname" id="firstname" label="Vorname" register={ register } validation={ { validate: (value) => { return value !== ''; } } } errors={ formState.errors } errorText="Bitte gebe deinen Vornamen an" />
					<InputText className="personal-data__input personal-data__input--lastname" id="lastname" label="Nachname" register={ register } validation={ { validate: (value) => { return value !== ''; } } } errors={ formState.errors } errorText="Bitte gebe deinen Nachnamen an" />
					<InputText className="personal-data__input personal-data__input--street" id="street" label="Strasse" register={ register } validation={ { validate: (value) => { return value !== ''; } } } errors={ formState.errors } errorText="Bitte gebe deine Strasse an" />
					<InputText className="personal-data__input personal-data__input--town" id="town" label="PLZ, Ort" register={ register } validation={ { validate: (value) => { return value !== ''; } } } errors={ formState.errors } errorText="Bitte gebe deine Adresse an" />
					<InputText className="personal-data__input personal-data__input--email" id="email" label="E-Mail" register={ register } validation={ { validate: (value) => { return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i.test(value); } } } errors={ formState.errors } errorText="Bitte gebe deine E-Mail Adresse an" />
					<InputText className="personal-data__input personal-data__input--phone" id="phone" label="Telefonnummer" register={ register } validation={ { validate: (value) => { return value !== ''; } } } errors={ formState.errors } errorText="Bitte gebe deine Telefonnummer an" />
				</fieldset>
				<fieldset className="container__dress dress">
					<Heading className="dress__heading" level="h3">Zum Kleid</Heading>
					<InputText className="dress__input dress__input--brand" id="brand" label="Marke" register={ register } validation={ { validate: (value) => { return value !== ''; } } } errors={ formState.errors } errorText="Bitte gebe die Marke des Kleides an" />
					<InputText className="dress__input dress__input--buy-date" id="buy-date" label="Kaufdatum" register={ register } validation={ { validate: (value) => { return value !== ''; } } } errors={ formState.errors } errorText="Bitte gebe das Kaufdatum des Kleides an" />
					<InputText className="dress__input dress__input--size" id="size" label="Grösse" register={ register } validation={ { validate: (value) => { return value !== ''; } } } errors={ formState.errors } errorText="Bitte gebe die Grösse des Kleides an" />
					<InputText className="dress__input dress__input--original-price" id="original-price" label="Originalpreis" type="number" register={ register } validation={ { validate: (value) => { return value !== ''; } } } errors={ formState.errors } errorText="Bitte gebe den Original-Preis des Kleides an" />
					<InputText className="dress__input dress__input--sell-price" id="sell-price" label="Gewünschter Verkauspreis" type="number" register={ register } validation={ { validate: (value) => { return value !== ''; } } } errors={ formState.errors } errorText="Bitte gebe den gewünschten Verkaufspreis des Kleides an" />
					<InputFile className="dress__input dress__input--picture" label="" header="Foto hochladen" id="picture" errors={ formState.errors } errorText="Bitte wähle maximal 5 Bilder aus" register={ register } value={ values.picture } validation={ { validate: (value) => { return value.length <= 5; } } } readOnly />
				</fieldset>
				<fieldset className="container__action action">
					<InputSubmit className="action__submit" label="Senden" />
				</fieldset>
			</form>
		</Section>
	);

};

export default SellForm;
