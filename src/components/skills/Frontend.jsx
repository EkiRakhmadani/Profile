const Frontend = () => {
  return (
    <div className="skills_content">
      <h3 className="skills_title">Frontend Developer</h3>

      <div className="skills_box">
        <div className="skill_group">
          {/* Skill 1 */}
          <div className="skills_data">
            <i className="uil uil-check-circle"></i>
            <div>
              <h3 className="skills_name">HTML5</h3>
              <span className="skills_level">Advance</span>
            </div>
          </div>

          {/* Skill 2 */}
          <div className="skills_data">
            <i className="uil uil-check-circle"></i>
            <div>
              <h3 className="skills_name">CSS3</h3>
              <span className="skills_level">Advance</span>
            </div>
          </div>

          {/* Skill 3 */}
          <div className="skills_data">
            <i className="uil uil-check-circle"></i>
            <div>
              <h3 className="skills_name">Javascript</h3>
              <span className="skills_level">Intermediete</span>
            </div>
          </div>

          {/* Skill 4 */}
          <div className="skills_data">
            <i className="uil uil-check-circle"></i>
            <div>
              <h3 className="skills_name">ReactJs</h3>
              <span className="skills_level">Intermediete</span>
            </div>
          </div>
        </div>

        <div className="skill_group">
          {/* Skill 5 */}
          <div className="skills_data">
            <i className="uil uil-check-circle"></i>
            <div>
              <h3 className="skills_name">GitHub</h3>
              <span className="skills_level">Basic</span>
            </div>
          </div>

          {/* Skill 6 */}
          <div className="skills_data">
            <i className="uil uil-check-circle"></i>
            <div>
              <h3 className="skills_name">Bootstrap5</h3>
              <span className="skills_level">Basic</span>
            </div>
          </div>

          {/* Skill 7 */}
          <div className="skills_data">
            <i className="uil uil-check-circle"></i>
            <div>
              <h3 className="skills_name">Sass/Scss</h3>
              <span className="skills_level">Basic</span>
            </div>
          </div>

          {/* Skill 8 */}
          <div className="skills_data">
            <i className="uil uil-check-circle"></i>
            <div>
              <h3 className="skills_name">Google Script</h3>
              <span className="skills_level">Basic</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frontend;
