import "./Skills.css";

import Frontend from "./Frontend";
import Technical from "./Technical";

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section_title">Skills</h2>
      <span className="section_subtitle">My technical level</span>

      <div className="skills_container container grid">
        <Frontend />

        <Technical />
      </div>
    </section>
  );
};

export default Skills;
