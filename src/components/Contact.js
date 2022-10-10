import emailjs from "emailjs-com";
import { useRef } from "react";
import { useState } from "react";

const Contact = (props) => {
  const form = useRef();
  const [toSend, setToSend] = useState({
    submitted: false,
  });
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_x4iy52m",
        "template_z3wl5ea",
        form.current,
        "_INYh6CLB4ofTMkrN"
      )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        setToSend({submitted: true});
      })
      .catch((err) => {
        console.log("FAILED...", err);
      });
  };

  return (
    <>
      {!toSend.submitted && (
        <div class="container">
          <div class="row">
            <div class="col align-self-center">
              <h3 class="text-center">Contact</h3>
              {/* <!-- contact form --> */}
              <form ref={form} onSubmit={sendEmail}>
                {/* <!-- name --> */}
                <div class="form-group">
                  <label for="name">Name</label>
                  <input
                    type="name"
                    name="name"
                    class="form-control"
                    id="name"
                    placeholder="enter your name"
                    required
                  />
                </div>

                {/* <!-- email --> */}
                <div class="form-group">
                  <label for="email">Email address</label>
                  <input
                    type="email"
                    name="email"
                    class="form-control"
                    id="email"
                    placeholder="enter your email"
                    required
                  />
                </div>

                {/* <!-- subject --> */}
                <div class="form-group">
                  <label for="subject">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    class="form-control"
                    id="subject"
                    placeholder="enter email subject"
                    required
                  />
                </div>

                <div class="form-group">
                  <label for="email_body">Message</label>
                  <textarea
                    class="form-control"
                    id="email_body"
                    rows="5"
                    required
                  ></textarea>
                </div>
                <br></br>

                <button type="submit" class="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
      {toSend.submitted && <p>Sent</p>}
    </>
  );
};

export default Contact;
