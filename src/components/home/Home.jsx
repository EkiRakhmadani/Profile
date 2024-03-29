import "./Home.css";

import Data from "./Data";
import Social from "./Social";
import Scroll from "./Scroll";

const Home = () => {
  return (
    <section className="home section" id="home">
      <div className="home_container container grid">
        <div className="home_content grid">
          <Social />
          <div className="home_img"></div>
          <Data />
        </div>
        <Scroll />
      </div>
    </section>
  );
};

export default Home;
