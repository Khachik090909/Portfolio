import React, { useState } from "react";
import "./project.scss";
import SwiperContainer from "../components/Swiper";
import data from "../components/titleProject.json";
import slide1 from "../assets/capture/geocod.png";
import slide2 from "../assets/capture/coctailAtom.png";
import slide3 from "../assets/capture/panda.png";
import slide4 from "../assets/capture/boutade.png";
import slide5 from "../assets/capture/loreal.png";
import { useUserContext } from "../contexte/UserContext";

const images = [slide1, slide2, slide3, slide4, slide5];
const links = [
  "https://panda-project-seven.vercel.app/",
  "https://cocktail-atom.vercel.app/",
  "https://panda-project-seven.vercel.app/",
  "https://boutade.vercel.app/",
  "https://lorem-project-seven.vercel.app/",
];

function Project() {
  const { darkMode } = useUserContext();
  const [activeIndex, setActiveIndex] = useState(0);

  const currentProject = data[activeIndex];
  const currentTitle = Object.keys(currentProject)[0];
  const currentDescription = Object.values(currentProject)[0];
  const currentLink = links[activeIndex];

  return (
    <div
      className="project"
      style={{
        backgroundColor: `rgb(${255 - darkMode}, ${255 - darkMode}, ${
          255 - darkMode
        })`,
        color: `${
          darkMode < 125
            ? `rgb(${darkMode - 22}, ${darkMode - 22}, ${darkMode - 22})`
            : `rgb(${darkMode + 22}, ${darkMode + 22}, ${darkMode + 22})`
        }`,
      }}
    >
      <div className="project-container">
        <div className="project-1">
          <div className="project-title">
            <h1>{currentTitle}</h1>
            <p>{currentDescription}</p>
            <button
              className={"demo" + "-" + activeIndex}
              onClick={() => window.open(currentLink, "_blank")}
            >
              <span>Démonstration</span>
            </button>
          </div>
          <div className="project-img">
            <SwiperContainer images={images} setActiveIndex={setActiveIndex} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
