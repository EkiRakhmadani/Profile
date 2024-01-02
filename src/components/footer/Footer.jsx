import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer_container container">
        <h1 className="footer_title">Rizki Rakhmadani Rufendi</h1>

        <ul className="footer_list">
          <li>
            <a href="#about" className="footer_link">
              About
            </a>
          </li>

          <li>
            <a href="#project" className="footer_link">
              Projects
            </a>
          </li>

          <li>
            <a href="#testimonials" className="footer_link">
              Testimonials
            </a>
          </li>
        </ul>

        <div className="footer_social">
          {/* Instagram */}
          <a
            href="https://www.instagram.com/ekirakhmadani/"
            className="footer_social-icon"
            target="_blank"
            rel="noreferrer"
          >
            <i className="uil uil-instagram footer_social-link"></i>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/rizki-rakhmadani/"
            className="footer_social-icon"
            target="_blank"
            rel="noreferrer"
          >
            <i className="uil uil-linkedin footer_social-link"></i>
          </a>

          {/* Github */}
          <a
            href="https://github.com/EkiRakhmadani"
            className="footer_social-icon"
            target="_blank"
            rel="noreferrer"
          >
            <i className="uil uil-github footer_social-link"></i>
          </a>
        </div>

        <span className="footer_copy">
          Made with ❤️ by{" "}
          <a href="mailto:rrakhmadani@gmail.com" className="footer_copy-link">
            EkiRakhmadani
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
