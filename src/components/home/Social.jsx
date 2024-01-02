const Social = () => {
  return (
    <div className="home_social">
      {/* Instagram */}
      <a
        href="https://www.instagram.com/ekirakhmadani/"
        className="home_social-icon"
        target="_blank"
        rel="noreferrer"
      >
        <i className="uil uil-instagram"></i>
      </a>

      {/* LinkedIn */}
      <a
        href="https://www.linkedin.com/in/rizki-rakhmadani/"
        className="home_social-icon"
        target="_blank"
        rel="noreferrer"
      >
        <i className="uil uil-linkedin"></i>
      </a>

      {/* Github */}
      <a
        href="https://github.com/EkiRakhmadani"
        className="home_social-icon"
        target="_blank"
        rel="noreferrer"
      >
        <i className="uil uil-github"></i>
      </a>
    </div>
  );
};

export default Social;
