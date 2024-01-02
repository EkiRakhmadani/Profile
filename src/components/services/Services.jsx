import { useState } from "react";
import "./Services.css";

const Services = () => {
  const [toggle, setToggle] = useState(0);

  const toggleTab = (e) => {
    setToggle(e);
  };
  return (
    <section className="services section" id="services">
      <h2 className="section_title">Services</h2>
      <span className="section_subtitle">Let me present to you..</span>

      <div className="services_container container grid">
        {/* Website Project */}
        <div className="services_content">
          <div>
            <i className="uil uil-arrow services_icon"></i>
            <h3 className="services_title">
              Website <br />
              Project
            </h3>
          </div>

          <span
            className="services_button"
            onClick={() => {
              toggleTab(1);
            }}
          >
            View More
            <i className="uil uil-arrow-right services_button-icon"></i>
          </span>

          <div
            className={
              toggle === 1 ? "services_modal active_modal" : "services_modal"
            }
          >
            <div className="services_modal-content">
              <i
                className="uil uil-times services_modal-close"
                onClick={() => {
                  toggleTab(0);
                }}
              ></i>

              <h3 className="services_modal-title">Web Developer</h3>

              <p className="services_modal-description">
                Service with more than 2 years of experiences. Providing high
                standard quality of work to cliens or company.
              </p>

              <ul className="services_modal-services grid">
                <li className="services_modal-service">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="services_modal-info">
                    Design, create and maintain websites.
                  </p>
                </li>

                <li className="services_modal-service">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="services_modal-info">
                    Signup page, and landing page development.
                  </p>
                </li>

                <li className="services_modal-service">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="services_modal-info">
                    Providing data security of the websites.
                  </p>
                </li>

                <li className="services_modal-service">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="services_modal-info">Database structure.</p>
                </li>

                <li className="services_modal-service">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="services_modal-info">
                    Responsive web design to any devices.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Technical Support */}
        <div className="services_content">
          <div>
            <i className="uil uil-comment-question services_icon"></i>
            <h3 className="services_title">
              Technical <br />
              Support
            </h3>
          </div>

          <span
            className="services_button"
            onClick={() => {
              toggleTab(2);
            }}
          >
            View More
            <i className="uil uil-arrow-right services_button-icon"></i>
          </span>

          <div
            className={
              toggle === 2 ? "services_modal active_modal" : "services_modal"
            }
          >
            <div className="services_modal-content">
              <i
                className="uil uil-times services_modal-close"
                onClick={() => {
                  toggleTab(0);
                }}
              ></i>

              <h3 className="services_modal-title">Technical Support</h3>

              <p className="services_modal-description">
                Service with more than 2 years of experiences. Providing high
                standard quality of work to cliens or company.
              </p>

              <ul className="services_modal-services grid">
                <li className="services_modal-service">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="services_modal-info">
                    Diagnosing and troubleshooting hardware or software faults.
                  </p>
                </li>

                <li className="services_modal-service">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="services_modal-info">
                    Software or hardware instalation.
                  </p>
                </li>

                <li className="services_modal-service">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="services_modal-info">
                    Resolving network issue.
                  </p>
                </li>

                <li className="services_modal-service">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="services_modal-info">
                    Responsible for assisting clients with technical issue or
                    questios.
                  </p>
                </li>

                <li className="services_modal-service">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="services_modal-info">
                    Providing services for data storage, email hosting and any
                    kind of clients needs.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* UI/UX Designer */}
        <div className="services_content">
          <div>
            <i className="uil uil-arrow services_icon"></i>
            <h3 className="services_title">
              UI/UX <br />
              Designer
            </h3>
          </div>

          <span
            className="services_button"
            onClick={() => {
              toggleTab(3);
            }}
          >
            View More
            <i className="uil uil-arrow-right services_button-icon"></i>
          </span>

          <div
            className={
              toggle === 3 ? "services_modal active_modal" : "services_modal"
            }
          >
            <div className="services_modal-content">
              <i
                className="uil uil-times services_modal-close"
                onClick={() => {
                  toggleTab(0);
                }}
              ></i>

              <h3 className="services_modal-title">UI/UX</h3>

              <p className="services_modal-description">
                Service with more than 2 years of experiences. Providing high
                standard quality of work to cliens or company.
              </p>

              <ul className="services_modal-services grid">
                <li className="services_modal-service">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="services_modal-info">
                    I develop the user interface.
                  </p>
                </li>

                <li className="services_modal-service">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="services_modal-info">Web page development.</p>
                </li>

                <li className="services_modal-service">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="services_modal-info">
                    I create ux element interaction.
                  </p>
                </li>

                <li className="services_modal-service">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="services_modal-info">
                    Position your company brand.
                  </p>
                </li>

                <li className="services_modal-service">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="services_modal-info">
                    Design and mockups of product for companies.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
