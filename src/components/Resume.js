import resumePDF from "../resume/NickolasKatzerResume.pdf"
import resumeJPEG from "../resume/NickolasKatzerResume.jpg"
import { Stack } from "react-bootstrap";

const Resume = (props) => {
  return (
    <Stack gap={6} className="my-3 mx-auto">
    <img id="resume" style={{ width: "50rem" }} src={resumeJPEG} />

    <a href={resumePDF} target="_blank" download>
      DOWNLOAD
    </a>
    </Stack>
  )
};

export default Resume;
