import sendLogo from "../../assets/send.svg";
import handLogo from "../../assets/hand.svg";

const Data = () => {
  return (
    <div className="home_data">
      <h1 className="home_title">
        Rizki Rakhmadani Rufendi
        <img src={handLogo} alt="" className="home_hand" />
      </h1>

      <h3 className="home_subtitle">Frontend Web-Developer</h3>
      <p className="home_description">
        A developer based in Jakarta, highly-motivated, passionate and dedicated
        to my work.
      </p>
      <a href="#contact" className="button button--flex">
        Reach Me!
        <img src={sendLogo} alt="" className="button_icon" />
      </a>
    </div>
  );
};

export default Data;
