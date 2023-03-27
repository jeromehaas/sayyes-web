import Section from "components/layouts/section/section";
import Heading from "components/content/heading/heading";
import Paragraph from "components/content/paragraph/paragraph";
import Button from "components//content/button/button";

const Start = ( ) => {

  return (
    <Section className="start">
      <Heading level="h1">Hello World</Heading>
      <Heading level="h2">Hello World</Heading>
      <Heading level="h3">Hello World</Heading>
      <Heading level="h4">Hello World</Heading>
      <Paragraph>Hello World!</Paragraph>
      <Button>Hello World!</Button>
    </Section>
  );

};

export default Start;
