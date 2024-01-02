import "./Contact.css";
import sendLogo from "../../assets/send.svg";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_rmbl3jg",
      "template_8a5crbo",
      form.current,
      "GenwGIJ09kO0CzT7B"
    );
    e.target.reset();
  };
  return (
    <section className="contact section" id="contact">
      <h2 className="section_title">Get in touch</h2>
      <span className="section_subtitle">Contact Me ☎️</span>

      <div className="contact_container container grid">
        <div className="contact_content">
          <h3 className="contact_title">Talk to me</h3>

          <div className="contact_info">
            {/* Email */}
            <div className="contact_card">
              <i className="bx bx-mail-send contact_card-icon"></i>

              <h3 className="contact_card-title">Email</h3>
              <span className="contact_card-data">rrakhmadani@gmail.com</span>

              <a href="mailto:rrakhmadani@gmail.com" className="contact_button">
                Write me{" "}
                <i className="bx bx-right-arrow-alt contact_button-icon"></i>
              </a>
            </div>

            {/* Whatsapp */}
            <div className="contact_card">
              <i className="bx bxl-whatsapp contact_card-icon"></i>

              <h3 className="contact_card-title">Whatsapp</h3>
              <span className="contact_card-data">0812-8473-7635</span>

              <a
                href="https://api.whatsapp.com/send/?phone=6281284737635&text=Halo Eki ! Apakabar ?"
                className="contact_button"
              >
                Write me{" "}
                <i className="bx bx-right-arrow-alt contact_button-icon"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="contact_content">
          <h3 className="contact_title">Write me your project</h3>

          <form ref={form} onSubmit={sendEmail} className="contact_form">
            {/* Input => Name */}
            <div className="contact_form-div">
              <label className="contact_form-tag">Name</label>
              <input
                type="text"
                name="name"
                id=""
                className="contact_form-input"
                placeholder="Insert your name"
                required="true"
              />
            </div>

            {/* Input => Email */}
            <div className="contact_form-div">
              <label className="contact_form-tag">Email</label>
              <input
                type="email"
                name="email"
                id=""
                className="contact_form-input"
                placeholder="Insert your email"
                required="true"
              />
            </div>

            {/* Textarea => Project */}
            <div className="contact_form-div contact_form-textarea">
              <label className="contact_form-tag">Project</label>
              <textarea
                name="project"
                id=""
                cols="30"
                rows="10"
                className="contact_form-input"
                placeholder="Write your project"
                required="true"
              ></textarea>
            </div>

            <button className="button button--flex">
              Send Message
              <img src={sendLogo} alt="" className="button_icon" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
