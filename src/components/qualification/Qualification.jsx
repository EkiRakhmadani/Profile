import { useState } from "react";
import "./Qualification.css";

const Qualification = () => {
  const [toggle, setToggle] = useState(0);

  const toggleTab = (e) => {
    setToggle(e);
  };
  return (
    <section className="qualification section" id="qualification">
      <h2 className="section_title">Qualification</h2>
      <span className="section_subtitle">My Peronal Journey🙌</span>

      <div className="qualification_container container">
        <div className="qualification_tabs">
          {/* Button Experience */}
          <div
            className={
              toggle === 1
                ? "qualification_button qualification_active button--flex"
                : "qualification_button button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-briefcase-alt qualification_icon"></i>{" "}
            Experience
          </div>

          {/* Button Education */}
          <div
            className={
              toggle === 2
                ? "qualification_button qualification_active button--flex"
                : "qualification_button button--flex"
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-graduation-cap qualification_icon"></i>{" "}
            Education
          </div>
        </div>

        <div className="qualification_sections">
          <div
            className={
              toggle === 1
                ? "qualification_content qualification_content-active"
                : "qualification_content "
            }
          >
            {/* IJS */}
            <div className="qualification_data">
              <div>
                <h3 className="qualification_title">Web Developer</h3>
                <span className="qualification_subtitle">
                  PT Internusa Jayaabadi Sentosa
                </span>
                <div className="qualification_calendar">
                  <i className="uil uil-calendar-alt"></i> 2021 - Present
                </div>
              </div>
              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
            </div>

            {/* OTC */}
            <div className="qualification_data">
              <div></div>
              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
              <div>
                <h3 className="qualification_title">Website Project</h3>
                <span className="qualification_subtitle">
                  Onetwocode Indonesia
                </span>
                <div className="qualification_calendar">
                  <i className="uil uil-calendar-alt"></i> 2021
                </div>
              </div>
            </div>

            {/* FSI */}
            <div className="qualification_data">
              <div>
                <h3 className="qualification_title">Junior Programmer</h3>
                <span className="qualification_subtitle">
                  PT Field Survey Indonesia
                </span>
                <div className="qualification_calendar">
                  <i className="uil uil-calendar-alt"></i> 2019 - 2020
                </div>
              </div>

              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
            </div>
          </div>

          <div
            className={
              toggle === 2
                ? "qualification_content qualification_content-active"
                : "qualification_content "
            }
          >
            {/* REACT JS */}
            <div className="qualification_data">
              <div>
                <h3 className="qualification_title">
                  ReactJs & React Native Development
                </h3>
                <span className="qualification_subtitle">
                  Hacktiv8 Indonesia
                </span>
                <div className="qualification_calendar">
                  <i className="uil uil-calendar-alt"></i> 2022
                </div>
              </div>
              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
            </div>

            {/* WEB DEVELOPMENT */}
            <div className="qualification_data">
              <div></div>
              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>

              <div>
                <h3 className="qualification_title">Web Development</h3>
                <span className="qualification_subtitle">
                  Hacktiv8 Indonesia
                </span>
                <div className="qualification_calendar">
                  <i className="uil uil-calendar-alt"></i> 2022
                </div>
              </div>
            </div>

            {/* WEB DESIGN */}
            <div className="qualification_data">
              <div>
                <h3 className="qualification_title">Web Design</h3>
                <span className="qualification_subtitle">
                  OneTwoCode Indonesia
                </span>
                <div className="qualification_calendar">
                  <i className="uil uil-calendar-alt"></i> 2021
                </div>
              </div>

              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
