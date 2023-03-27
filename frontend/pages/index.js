import Section from "components/layouts/section/section";
import Heading from "components/content/heading/heading";
import Paragraph from "components/content/paragraph/paragraph";
import Button from "components//content/button/button";
import Picture from "components//content/picture/picture";
import InputText from "components//inputs/input-text/input-text";
import InputCheckboxGroup from "components//inputs/input-checkbox-group/input-checkbox-group";

const Start = ( ) => {

  return (
    <Section className="start">
      {/* <InputText /> */}
      <InputCheckboxGroup 
        label="An diesen Tagen geht es mir am besteen:"
        header="Wochentage"
        name="weekdays"
        options={[
          { id: "1", value: "Montag", label: "Montag", info: "some infos" },
          { id: "2", value: "Dienstag", label: "Dienstag" },
          { id: "3", value: "Mittwoch", label: "Mittwoch" },
        ]}
      />
    </Section>
  );

};

export default Start;
