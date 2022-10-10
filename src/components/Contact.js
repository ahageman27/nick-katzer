import emailjs from "emailjs-com";
import { useRef } from "react";

const Contact = (props) => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_x4iy52m",
        "template_pczcy9e",
        form.current,
        "_INYh6CLB4ofTMkrN"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <div class="container">
        <div class="row">
          <div class="col align-self-center">
            <h3 class="text-center">Contact</h3>
            {/* <!-- contact form --> */}
            <form>
              {/* <!-- name --> */}
              <div class="form-group">
                <label for="name">Name</label>
                <input
                  type="name"
                  name="name"
                  class="form-control"
                  id="name"
                  placeholder="enter your name"
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
                />
              </div>

              <div class="form-group">
                <label for="email_body">Message</label>
                <textarea
                  class="form-control"
                  id="email_body"
                  rows="5"
                ></textarea>
              </div>

              <button type="submit" class="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Contact;
