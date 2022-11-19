import Container from "react-bootstrap/Container";
import { Stack } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import ProfilePic from "../images/nick-katzer-profile-pic.jpg";
import constructionCrew from "../images/construction-crew.jpg";
import millionDollar from "../images/million-dollar-home.jpg";
import emptyLand from "../images/empty-land.jpg"

const AboutMe = (props) => {
  return (
    <Container fluid>
      <Stack gap={4} className="my-3">
        <Card className="mx-auto" style={{ width: "70rem" }}>
          <Card.Img variant="top" src={ProfilePic} />
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
              I'd love to hear from you. If you have any questions about me,
              please fill out the contact form and I will get back to you in
              within 24 hours.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card className="mx-auto" style={{ width: "50rem" }}>
          <Card.Img variant="top" src={constructionCrew} />
        </Card>
        <Card className="mx-auto" style={{ width: "50rem" }}>
          <Card.Img variant="top" src={millionDollar} />
        </Card>
        <Card className="mx-auto" style={{ width: "50rem" }}>
          <Card.Img variant="top" src={emptyLand} />
        </Card>
      </Stack>
    </Container>
  );
};

export default AboutMe;
