import Section from "components//layouts/section/section";
import Heading from "components//content/heading/heading";
import Picture from "components//content/picture/picture";
import InputText from "components//inputs/input-text/input-text";
import InputSelection from "components//inputs/input-selection/input-selection";
import InputFile from "components//inputs/input-file/input-file";
import InputSubmit from "components//inputs/input-submit/input-submit";
import { useForm } from "react-hook-form";

const BuyForm = () => {

	// BRING IN REACT-HOOK-FORM
	const { register, handleSubmit, getValues, formState } = useForm();

	// HANDLE DISPATCH
	const handleDispatch = (data, event) => {
		console.log(data);
	};

	return (
		<Section className="buy-form">
			<form className="buy-form__container container" onSubmit={ handleSubmit((data, event) => handleDispatch(data, event))}>
				<Heading className="container__heading">Kontakt</Heading>
				<Picture  className="container__picture" src="/images/placeholder/placeholder.png" alt="image" figure={{ form: "down", position: 'top-left', borderColor: 'grey' }}	 />
				
				<fieldset className="container__personal-data personal-data">
					<Heading className="personal-data__heading">Personalien</Heading>
					<InputText className="personal-data__input personal-data__input--firstname" id="firstname" label="Vorname" register={ register } validation={{ validate: (value) => value !== "" }} errors={ formState.errors } errorText="Dieses Feld ist erforderlich"  />
					<InputText className="personal-data__input personal-data__input--lastname" id="lastname" label="Nachname" register={ register } validation={{ validate: (value) => value !== "" }} errors={ formState.errors } errorText="Dieses Feld ist erforderlich" />
					<InputText className="personal-data__input personal-data__input--street" id="street" label="Adresse" register={ register } validation={{ validate: (value) => value !== "" }} errors={ formState.errors } errorText="Dieses Feld ist erforderlich" />
					<InputText className="personal-data__input personal-data__input--town" id="town" label="PLZ, Ort" register={ register } validation={{ validate: (value) => value !== "" }} errors={ formState.errors } errorText="Dieses Feld ist erforderlich" />
					<InputText className="personal-data__input personal-data__input--email" id="email" label="Email" register={ register } validation={{ validate: (value) => value !== "" }} errors={ formState.errors } errorText="Dieses Feld ist erforderlich" />
					<InputText className="personal-data__input personal-data__input--phone" id="phone" label="Telefon-Nummer" register={ register } validation={{ validate: (value) => value !== "" }} errors={ formState.errors } errorText="Dieses Feld ist erforderlich" />
				</fieldset>
				
				<fieldset className="container__dress dress">
					<Heading className="dress__heading">Dein Traumkleid</Heading>
					<InputText className="dress__input dress__input--size" label="Deine Kleidergrösse" id="size" register={ register } errors={ formState.errors }  validation={{ validate: (value) => value !== ""  }} errorText="Dieses Fled ist erforderlich" />
					<InputText className="dress__input dress__input--wedding-date" label="Hochzeitsdatum" id="wedding-date" register={ register } errors={ formState.errors }  validation={{ validate: (value) => value !== ""  }} errorText="Dieses Fled ist erforderlich" />
					<InputText className="dress__input dress__input--budget" label="Budget" id="budget" register={ register } errors={ formState.errors }  validation={{ validate: (value) => value !== ""  }} errorText="Dieses Fled ist erforderlich" />
					<InputText className="dress__input dress__input--selection" label="Kleider aus unserer Kollektion die dir gefallen" id="selection" register={ register } errors={ formState.errors }  validation={{ validate: (value) => value !== ""  }} errorText="Dieses Fled ist erforderlich" />
				</fieldset>

				<fieldset className="container__try-on try-on">
					<Heading className="try-on__heading">Anprobe</Heading>
					<InputSelection className="try-on__weekday" label="An diesn Tagen geht es mir am besten:" id="weekday" register={ register } header="Wähle einen Wochentag" name="weekday" type="checkbox" errors={ formState.errors } validation={{ validate: (value) => value.length > 0 }} errorText="Dieses Feld ist erforderlich" options={[ { id: "monday", value: "monday", label: "Montag",  },{ id: "tuesday", value: "tuesday", label: "Dienstag",  },{ id: "wednesday", value: "wednesday", label: "Mittwoch",  },{ id: "thursday", value: "thursday", label: "Donnerstag",  },{ id: "friday", value: "friday", label: "Freitag",  },{ id: "saturday", value: "saturday", label: "Samstag",  },{ id: "sunday", value: "sunday", label: "Sonntag" }]}/>
					<InputSelection className="try-on__package" label="Welche Anprobe wünsche ich mir?" id="package" register={ register } header="Anprobepaket" name="package" type="radio" errors={ formState.errors } validation={{ validate: (value) => value !== null }} errorText="Dieses Feld ist erforderlich" options={[ { id: "fun-and-friends", value: "fun-and-friends", label: "Fun & Friends", info: '(75.-)' },{ id: "Bubbles, Food & Friends", value: "bubbles-food-and-friends", label: "Bubbles, Food & Friends", info: '(75.- + 15.- pro Person)'  },]}/>
				</fieldset>

				<fieldset className="container__upload upload">
					<Heading className="upload__heading">Dein Foto</Heading>
					<InputFile className="upload__input upload__input--picture" label="Damit wir uns eine Vorstellung von deinem Typ machen können, kannst du hier ein Foto von dir hochladen (optional)" header="Foto hochladen" id="picture" register={ register } readOnly />
				</fieldset> 

				<fieldset className="container__action action">
					<InputSubmit  className="action__submit" label="Senden" />
				</fieldset>

			</form>
		</Section>
	);

};

export default BuyForm;