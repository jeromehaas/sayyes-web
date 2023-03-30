import Section from "components//layouts/section/section";
import Heading from "components//content/heading/heading";
import Picture from "components//content/picture/picture";
import InputText from "components//inputs/input-text/input-text";

const BuyForm = () => {

	return (
		<Section className="buy-form">
			<form className="buy-form__container container">
				<Heading className="container__heading">Kontakt</Heading>
				<Picture  className="container__picture" src="/images/placeholder/placeholder.png" alt="image" figure={{ form: "up", position: 'top-left', borderColor: 'grey' }}	 />
				
				<fieldset className="container__personal-data personal-data">
					<Heading className="personal-data__heading">Personalien</Heading>
					<InputText className="personal-data__input personal-data__input--firstname" label="Vorname" />
					<InputText className="personal-data__input personal-data__input--lastname" label="Nachname" />
					<InputText className="personal-data__input personal-data__input--street" label="Adresse" />
					<InputText className="personal-data__input personal-data__input--town" label="PLZ, Ort" />
				</fieldset>

				<fieldset className="container__dress dress">
						<Heading className="dress__heading">Dein Traumkleid</Heading>
				</fieldset>

				<fieldset>
						appointment
				</fieldset>

				<fieldset>
					upload
				</fieldset>



			</form>
		</Section>
	);

};

export default BuyForm;