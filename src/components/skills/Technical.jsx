const Technical = () => {
  return (
    <div className="skills_content">
      <h3 className="skills_title">Technical</h3>

      <div className="skills_box">
        <div className="skill_group">
          {/* Skill 1 */}
          <div className="skills_data">
            <i className="uil uil-check-circle"></i>
            <div>
              <h3 className="skills_name">Hardware</h3>
              <span className="skills_level">Advance</span>
            </div>
          </div>

          {/* Skill 2 */}
          <div className="skills_data">
            <i className="uil uil-check-circle"></i>
            <div>
              <h3 className="skills_name">Software</h3>
              <span className="skills_level">Advanced</span>
            </div>
          </div>

          {/* Skill 3 */}
          <div className="skills_data">
            <i className="uil uil-check-circle"></i>
            <div>
              <h3 className="skills_name">Synology</h3>
              <span className="skills_level">Advance</span>
            </div>
          </div>
        </div>

        <div className="skill_group">
          {/* Skill 4 */}
          <div className="skills_data">
            <i className="uil uil-check-circle"></i>
            <div>
              <h3 className="skills_name">Troubleshoot</h3>
              <span className="skills_level">Intermediete</span>
            </div>
          </div>

          {/* Skill 5 */}
          <div className="skills_data">
            <i className="uil uil-check-circle"></i>
            <div>
              <h3 className="skills_name">Network</h3>
              <span className="skills_level">Basic</span>
            </div>
          </div>

          {/* Skill 6 */}
          <div className="skills_data">
            <i className="uil uil-check-circle"></i>
            <div>
              <h3 className="skills_name">Mikrotik</h3>
              <span className="skills_level">Basic</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technical;
