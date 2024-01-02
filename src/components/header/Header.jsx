import { useState } from "react";
import "./Header.css";

const Header = () => {
  window.addEventListener("scroll", () => {
    const header = document.querySelector(".header");
    scrollY >= 80
      ? header.classList.add("scroll-header")
      : header.classList.remove("scroll-header");
  });

  const [toggle, showToggle] = useState(false);
  const [activeNav, setActiveNav] = useState("#home");

  return (
    <header className="header">
      <nav className="nav container">
        <a href="index.html" className="nav_logo">
          EkiRakhmadani
        </a>

        <div className={toggle ? "nav_menu show_menu" : "nav_menu"}>
          <ul className="nav_list grid">
            {/* Home */}
            <li className="nav_item">
              <a
                href="#home"
                className={
                  activeNav === "#home" ? "nav_link active_link" : "nav_link "
                }
                onClick={() => {
                  setActiveNav("#home");
                }}
              >
                <i className="uil uil-estate nav_icon"></i> Home
              </a>
            </li>

            {/* About Me */}
            <li className="nav_item">
              <a
                href="#about"
                className={
                  activeNav === "#about" ? "nav_link active_link" : "nav_link "
                }
                onClick={() => {
                  setActiveNav("#about");
                }}
              >
                <i className="uil uil-user nav_icon"></i> About
              </a>
            </li>

            {/* Skills */}
            <li className="nav_item">
              <a
                href="#skills"
                className={
                  activeNav === "#skills" ? "nav_link active_link" : "nav_link "
                }
                onClick={() => {
                  setActiveNav("#skills");
                }}
              >
                <i className="uil uil-file-alt nav_icon"></i> Skills
              </a>
            </li>

            {/* Services */}
            <li className="nav_item">
              <a
                href="#services"
                className={
                  activeNav === "#services"
                    ? "nav_link active_link"
                    : "nav_link "
                }
                onClick={() => {
                  setActiveNav("#services");
                }}
              >
                <i className="uil uil-briefcase-alt nav_icon"></i> Services
              </a>
            </li>

            {/* Portofolio */}
            <li className="nav_item">
              <a
                href="#project"
                className={
                  activeNav === "#portofolio"
                    ? "nav_link active_link"
                    : "nav_link "
                }
                onClick={() => {
                  setActiveNav("#portofolio");
                }}
              >
                <i className="uil uil-scenery nav_icon"></i> Portofolio
              </a>
            </li>

            {/* Contact */}
            <li className="nav_item">
              <a
                href="#contact"
                className={
                  activeNav === "#contact"
                    ? "nav_link active_link"
                    : "nav_link "
                }
                onClick={() => {
                  setActiveNav("#contact");
                }}
              >
                <i className="uil uil-message nav_icon"></i> Contact
              </a>
            </li>
          </ul>

          <i
            className="uil uil-times nav_close"
            onClick={() => showToggle(!toggle)}
          ></i>
        </div>

        <div className="nav_toggle" onClick={() => showToggle(!toggle)}>
          <i className="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
