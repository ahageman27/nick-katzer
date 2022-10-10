import Container from "react-bootstrap/Container";
import { Stack } from "react-bootstrap";
import Card from "react-bootstrap/Card";

const AboutMe = (props) => {
  return (
    <Container fluid>
      <Stack gap={4} className="">
        <Card>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Nick Katzer</Card.Title>
            <Card.Text>
              Hi, my name is Nickolas Katzer. I have worked in the construction
              industry for the last 10 years. I have done multiple projects
              ranging from residential to multimillion dollar commercial
              projects. Currently I am enrolled in real estate school going for
              my brokers license. I have an interest in real estate coming from
              a real estate family. My family and I have been involved with real
              estate since 1996.
            </Card.Text>
            <Card.Text>
              Id love to hear from you. If you have any questions about me,
              please fill out the contact form and I will get back to you in
              within 24 hours.
            </Card.Text>
          </Card.Body>
        </Card>
      </Stack>
    </Container>
  );
};

export default AboutMe;
