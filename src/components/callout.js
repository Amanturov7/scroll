import React, { useEffect, useState } from "react";
import ScrollableAnchor from "react-scrollable-anchor";
import { useForm } from "react-hook-form";
import "./form.css";

const CalloutSection = ({ display, setDisplay }) => {
  useEffect(() => {
    // eslint-disable-next-line
  }, []);
  return (
    <ScrollableAnchor id="contact">
      <section className="callout">
        <div className="container text-center">
          <h2 className="mx-auto mb-5">What are you waiting for?</h2>
          <button
            className="btn btn-primary btn-lg"
            onClick={() => setDisplay(!display)}
          >
            Contact Me
          </button>
        </div>
      </section>
    </ScrollableAnchor>
  );
};

const SeeForm = () => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);
  return (
    <section className="callout contact-form" id="contact">
      <div className="container">
        <div className="row">
          <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
            <div className="card card-signin my-5">
              <div className="card-body">
                <h4 className="card-title text-center">Contact Me</h4>
                <form
                  className="form-signin"
                  name="Contact Form"
                  method="POST"
                  data-netlify="true"
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <select
                    className="form-label-group"
                    name="Employer"
                    ref={register({ required: true })}
                  >
                    <option value="Customer">Customer</option>
                    <option value="Employer">Employer</option>
                    <option value="Developer">Developer</option>
                  </select>
                  <div className="form-label-group">
                    <input
                      type="text"
                      id="inputName"
                      placeholder="Name"
                      name="Name"
                      ref={register({ required: true, maxLength: 80 })}
                      className="form-control"
                      autofocus
                    />
                  </div>

                  <div className="form-label-group">
                    <input
                      type="text"
                      id="inputEmail"
                      placeholder="Email address"
                      name="Email"
                      ref={register({
                        required: true,
                        pattern: /^\S+@\S+$/i
                      })}
                      autofocus
                      className="form-control"
                    />
                  </div>
                  <div className="form-label-group">
                    <input
                      type="tel"
                      placeholder="Mobile number"
                      name="Mobile number"
                      ref={register({
                        required: false,
                        minLength: 6,
                        maxLength: 12
                      })}
                      autofocus
                      className="form-control"
                    />
                  </div>
                  <div className="form-label-group">
                    <textarea
                      type="textarea"
                      id="inputText"
                      className="form-control"
                      placeholder="Message"
                      ref={register}
                      required
                    />
                  </div>

                  <button
                    className="btn btn-lg btn-primary btn-block text-uppercase"
                    type="submit"
                  >
                    Send Message
                  </button>
                  <hr className="my-4" />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactForm = () => {
  let [display, setDisplay] = useState(true);

  useEffect(() => {
    console.log(display);
    // eslint-disable-next-line
  }, [display]);
  return display ? (
    <CalloutSection setDisplay={setDisplay} display={display} />
  ) : (
    <div className>
      <SeeForm />
    </div>
  );
};

export default ContactForm;
