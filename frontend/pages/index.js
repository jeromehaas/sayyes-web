import Section from "components/layouts/section/section";
import Heading from "components/content/heading/heading";
import Paragraph from "components/content/paragraph/paragraph";
import Button from "components//content/button/button";
import Picture from "components//content/picture/picture";
import InputText from "components//inputs/input-text/input-text";
import InputSelection from "components//inputs/input-selection/input-selection";
import InputFile from "components//inputs/input-file/input-file";
import InputSubmit from "components//inputs/input-submit/input-submit";

const Start = ( ) => {

  return (
    <Section className="start">
      <InputSelection 
				type="radio"
        label="An diesen Tagen geht es mir am besteen:"
        header="Wochentage"
        name="weekdays"
        options={[
          { id: "1", value: "Montag", label: "Montag" },
          { id: "2", value: "Dienstag", label: "Dienstag" },
          { id: "3", value: "Mittwoch", label: "Mittwoch" },
        ]}
      />
			<InputFile 
				className="input-file"
				header="Foto hochladen"
				label="Bitte laden Sie ein Foto von sich hoch damit wir uns ein Bild von Ihnen machen können:"
			/>
			<InputSubmit label="Senden" />
    </Section>
  );

};

export default Start;
