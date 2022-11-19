import "./App.css";
import React, { useState } from "react";

import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import background from "./images/denver-skyline.jpg";

function App() {
  const [state, setState] = useState({
    showAboutMe: true,
    showResume: false,
    showContact: false,
  });

  const showAboutMeHandler = () => {
    setState({
      showAboutMe: true,
      showResume: false,
      showContact: false,
    });
  };
  const showResumeHandler = () => {
    setState({
      showAboutMe: false,
      showResume: true,
      showContact: false,
    });
  };
  const showContactHandler = () => {
    setState({
      showAboutMe: false,
      showResume: false,
      showContact: true,
    });
  };

  return (
    <>
      <img id="backgroundImage" src={background} />
      <Header
        showAboutMeHandler={showAboutMeHandler}
        showResumeHandler={showResumeHandler}
        showContactHandler={showContactHandler}
      />
      {state.showAboutMe && <AboutMe />}
      {state.showResume && <Resume />}
      {state.showContact && <Contact />}
    </>
  );
}

export default App;
