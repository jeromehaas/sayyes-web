import Section from "components//layouts/section/section";
import Heading from "components//content/heading/heading";
import Picture from "components//content/picture/picture";
import InputText from "components//inputs/input-text/input-text";
import InputSelection from "components//inputs/input-selection/input-selection";
import InputFile from "components//inputs/input-file/input-file";
import InputSubmit from "components//inputs/input-submit/input-submit";
import { useForm } from "react-hook-form";

const SellForm = () => {

	// BRING IN REACT-HOOK-FORM
	const { register, handleSubmit, getValues, formState } = useForm();


	// HANDLE DISPATCH
	const handleDispatch = (data, event) => {
		console.log(data);
	};

	return (
		<Section className="sell-form">
			<form className="sell-form__container container" onSubmit={ handleSubmit((data, event) => handleDispatch(data, event))}>
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
					<Heading className="dress__heading">Zum Kleid</Heading>
					<InputText className="dress__input dress__input--brand" id="brand" label="Marke" register={ register } validation={{ validate: (value) => value !== "" }} errors={ formState.errors } errorText="Dieses Feld ist erforderlich"  />
					<InputText className="dress__input dress__input--buy-date" id="buy-date" label="Kaufdatum" register={ register } validation={{ validate: (value) => value !== "" }} errors={ formState.errors } errorText="Dieses Feld ist erforderlich" />
					<InputText className="dress__input dress__input--size" id="size" label="Grösse" register={ register } validation={{ validate: (value) => value !== "" }} errors={ formState.errors } errorText="Dieses Feld ist erforderlich" />
					<InputText className="dress__input dress__input--original-price" id="original-price" label="Originalpreis" register={ register } validation={{ validate: (value) => value !== "" }} errors={ formState.errors } errorText="Dieses Feld ist erforderlich" />
					<InputText className="dress__input dress__input--sell-price" id="sell-price" label="Gewünschter Verkauspreis" register={ register } validation={{ validate: (value) => value !== "" }} errors={ formState.errors } errorText="Dieses Feld ist erforderlich" />
					<InputFile className="dress__input dress__input--picture" label="" header="Foto hochladen" id="picture" register={ register } readOnly />
				</fieldset>

                <fieldset className="container__action action">
					<InputSubmit  className="action__submit" label="Senden" />
				</fieldset>


			</form>
		</Section>
	);

};

export default SellForm;