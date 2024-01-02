import "./Scrollup.css";

const Scrollup = () => {
  window.addEventListener("scroll", () => {
    const scrollup = document.querySelector(".scrollup");
    scrollY >= 560
      ? scrollup.classList.add("show-scroll")
      : scrollup.classList.remove("show-scroll");
  });
  return (
    <a href="#" className="scrollup">
      <i className="uil uil-arrow-up scrollup_icon"></i>
    </a>
  );
};

export default Scrollup;
