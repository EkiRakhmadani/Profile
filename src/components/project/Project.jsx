import "./Project.css";
import { Data } from "./Data";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import required modules
import { Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import openLink from "../../assets/openLink.svg";

const Project = () => {
  return (
    <section className="project container section" id="project">
      <h2 className="section_title">Project</h2>
      <span className="section_subtitle">My lately project💪</span>

      <Swiper
        className="project_container"
        loop={true}
        grabCursor={true}
        spaceBetween={24}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          576: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 1,
          },
        }}
        modules={[Pagination]}
      >
        {Data.map(({ id, image, title, link, tools }) => {
          return (
            <SwiperSlide className="project_card" key={id}>
              <img src={image} alt="" className="project_img" />
              <h3 className="project_title">
                {title}{" "}
                <a
                  href={link}
                  target="_blank"
                  rel="noreferrer"
                  className="project_link"
                >
                  <a className="project_button">
                    Start Demo
                    <img src={openLink} alt="" className="project_openLink" />
                  </a>
                </a>
              </h3>

              <ul className="project_tech">
                {tools.map((tool, id) => (
                  <li className="project_tech" key={id}>
                    |{tool}|
                  </li>
                ))}
              </ul>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Project;
