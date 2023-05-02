import Section from "components//layouts/section/section";
import Heading from "components//content/heading/heading";
import Picture from "components//content/picture/picture";
import InputText from "components//inputs/input-text/input-text";
import InputSelection from "components//inputs/input-selection/input-selection";
import InputFile from "components//inputs/input-file/input-file";
import InputSubmit from "components//inputs/input-submit/input-submit";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useNotifierStore } from "stores/notifier";

const BuyForm = () => {

	// BRING IN STORE
	const { showNotifier } = useNotifierStore();

	// BRING IN REACT-HOOK-FORM
	const { register, handleSubmit, formState, reset, watch, getValues } = useForm();

	// GET VALUES 
	const values = getValues();

	// OBSERVE FIELDS
	watch(['picture', 'weekday', 'package']);

	// HANDLE DISPATCH
	const handleDispatch = async (values) => {

		// INIITIALIZE FORM DATA
		const submission = new FormData();

		// APPEND FILES
		for (let i = 0; i < values['picture'].length; i++) {
			submission.append('files.picture', values['picture'][i]);
		};

		// APPEND DATA
		submission.append('data', JSON.stringify({
			firstname: values['firstname'],
			lastname: values['lastname'],
			street: values['street'],
			town: values['town'],
			email: values['email'],
			phone: values['phone'],
			size: values['size'],
			weddingDate: values['wedding-date'],
			budget: values['budget'],
			selection: values['selection'],
			weekday: values['weekday'].toString().replace(/,/g, '/'),
			package: values['package'],
		}));

		// DISPATCH FORM SUBMISSION
		const response = await axios.post(`${ process.env.NEXT_PUBLIC_BACKEND_BASE_URL }/api/appointment-requests`, submission);

		// // HANDLE SUCCESS CASE
		if (response.status === 200) {
			showNotifier({ message: 'Die Nachricht wurde erfolgreich übermittelt', type: 'success', isVisible: 'true' });
			reset();

		// HANDLE ERROR CASE
		} else {
			showNotifier({ message: 'Die Nachricht konnte nicht übermittelt werden', type: 'error', isVisible: 'true' });
		};

	};

	return (
		<Section className="buy-form">
			<form className="buy-form__container container" onSubmit={ handleSubmit((values) => handleDispatch(values))}>
				<Heading className="container__heading">Kontakt</Heading>
				<Picture  className="container__picture" src="/images/general/general-03.webp" alt="Brautkleid" figure={{ form: "down", position: 'top-left', borderColor: 'grey' }}	 />
				
				<fieldset className="container__personal-data personal-data">
					<Heading className="personal-data__heading" level="h3">Personalien</Heading>
					<InputText className="personal-data__input personal-data__input--firstname" id="firstname" label="Vorname" register={ register } validation={{ validate: (value) => value !== "" }} errors={ formState.errors } errorText="Bitte gebe deinen Vornamen an"  />
					<InputText className="personal-data__input personal-data__input--lastname" id="lastname" label="Nachname" register={ register } validation={{ validate: (value) => value !== "" }} errors={ formState.errors } errorText="Bitte gebe deinen Nachnamen an" />
					<InputText className="personal-data__input personal-data__input--street" id="street" label="Strasse" register={ register } validation={{ validate: (value) => value !== "" }} errors={ formState.errors } errorText="Bitte gebe deine Strasse an" />
					<InputText className="personal-data__input personal-data__input--town" id="town" label="PLZ, Ort" register={ register } validation={{ validate: (value) => value !== "" }} errors={ formState.errors } errorText="Bitte gebe deine Adresse an" />
					<InputText className="personal-data__input personal-data__input--email" id="email" label="E-Mail" register={ register } validation={{ validate: (value) => /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i.test(value)}} pattern={{ pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/ }} errors={ formState.errors } errorText="Bitte gebe deine E-Mail Addresse an" />
					<InputText className="personal-data__input personal-data__input--phone" id="phone" label="Telefonnummer" register={ register } validation={{ validate: (value) => value !== "" }} errors={ formState.errors } errorText="Bitte gebe deine Telefonnummer an" />
				</fieldset>
				
				<fieldset className="container__dress dress">
					<Heading className="dress__heading" level="h3">Dein Traumkleid</Heading>
					<InputText className="dress__input dress__input--size" label="Deine Kleidergrösse" id="size" register={ register } errors={ formState.errors }  validation={{ validate: (value) => value !== ""  }} errorText="Bitte gebe deine Kleidergrösse an" />
					<InputText className="dress__input dress__input--wedding-date" label="Hochzeitsdatum" id="wedding-date" register={ register } errors={ formState.errors }  validation={{ validate: (value) => value !== ""  }} errorText="Bitte gebe dein Hochzeitsdatum an" />
					<InputText className="dress__input dress__input--budget" label="Dein Budget" id="budget" type="number" register={ register } errors={ formState.errors }  validation={{ validate: (value) => value !== ""  }} errorText="Bitte gebe dein Budget an" />
					<InputText className="dress__input dress__input--selection" label="Kleider aus unserer Kollektion die dir gefallen" id="selection" register={ register } errors={ formState.errors }  validation={{ validate: (value) => value !== ""  }} errorText="Bitte gebe ein oder mehrere Kleider unserer Kollektion an" />
				</fieldset>

				<fieldset className="container__try-on try-on">
					<Heading className="try-on__heading" level="h3">Anprobe</Heading>
					<InputSelection className="try-on__weekday" label="An diesen Tagen geht es mir am besten:" id="weekday" value={ values['weekday']} register={ register } header="Wähle einen Wochentag" name="weekday" type="checkbox" errors={ formState.errors } validation={{ validate: (value) => value.length > 0 }} errorText="Bitte nenne mindestens einen Wochentag" options={[ { id: "monday", value: "Montag", label: "Montag",  },{ id: "tuesday", value: "Dienstag", label: "Dienstag",  },{ id: "wednesday", value: "Mittwoch", label: "Mittwoch",  },{ id: "thursday", value: "Donnerstag", label: "Donnerstag",  },{ id: "friday", value: "Freitag", label: "Freitag",  },{ id: "saturday", value: "Samstag", label: "Samstag",  },{ id: "sunday", value: "Sonntag", label: "Sonntag" }]}/>
					<InputSelection className="try-on__package" label="Welche Anprobe wünsche ich mir?" id="package" value={ values['package']} register={ register } header="Anprobepaket" name="package" type="radio" errors={ formState.errors } validation={{ validate: (value) => value !== null }} errorText="Bitte wähle ein Packet" options={[ { id: "fun-and-friends", value: "Fun and Friends", label: "Fun & Friends", info: '(75.-)' },{ id: "bubbles-food-and-friends", value: "Bubbles, Food & Friends", label: "Bubbles, Food & Friends", info: '(75.- + 15.- pro Person)'  },]}/>
				</fieldset>

				<fieldset className="container__upload upload">
					<Heading className="upload__heading" level="h3">Dein Foto</Heading>
					<InputFile className="upload__input upload__input--picture" label="Damit wir uns eine Vorstellung von deinem Typ machen können, kannst du hier ein Foto von dir hochladen (optional)" header="Foto hochladen" id="picture" register={ register } value={ values['picture'] && values['picture'][0]?.name } readOnly />
				</fieldset> 

				<fieldset className="container__action action">
					<InputSubmit  className="action__submit" label="Senden" />
				</fieldset>

			</form>

		</Section>
	);

};

export default BuyForm;