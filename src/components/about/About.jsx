import "./About.css";
import aboutImg from "../../assets/profile_about.jpg";
import curriculum_vitae from "../../assets/CV.pdf";
import fileLogo from "../../assets/files.svg";

import Info from "./Info";

const About = () => {
  return (
    <section className="about section" id="about">
      <h2 className="section_title">About Me</h2>
      <span className="section_subtitle">My Introduction</span>

      <div className="about_container container grid">
        <img src={aboutImg} alt="" className="about_img" />

        <div className="about_data">
          <Info />

          <p className="about_description">
            Frontend developer, I created webpages with UI/UX user interface
          </p>

          <a
            href={curriculum_vitae}
            target="_blank"
            className="button button--flex"
            rel="noreferrer"
          >
            Download CV
            <img src={fileLogo} alt="" className="button_icon" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
