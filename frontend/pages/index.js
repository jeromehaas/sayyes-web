import Section from "components/layouts/section/section";
import Heading from "components/content/heading/heading";
import Paragraph from "components/content/paragraph/paragraph";
import Button from "components//content/button/button";
import Picture from "components//content/picture/picture";

const Start = ( ) => {

  return (
    <Section className="start">
      <Picture
        className="image"
        src="/images/placeholder/placeholder.png"
        figure={{
          form: 'up',
          position: 'bottom-left',
          borderColor: 'blue',
          backgroundColor: 'transparent',
          ordinate: 'front'
        }}
      />     
    </Section>
  );

};

export default Start;
