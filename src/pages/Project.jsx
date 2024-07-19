import React from "react";
import "./project.scss";
import Carrousel from "../components/Swiper";
import geocod1 from "../assets/captureGeoCode/1.png";
import geocod2 from "../assets/captureGeoCode/2.png";
import geocod3 from "../assets/captureGeoCode/3.png";

import { useUserContext } from "../contexte/UserContext";
function Project() {
  const { darkMode } = useUserContext();
  const images = [geocod1, geocod2, geocod3];
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
          <h1>titre du projet</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
            sed maxime quaerat nam sint ut culpa, dolore soluta aliquid! Minus
            commodi expedita ipsum voluptatem sunt, in voluptate odit sapiente
            provident.
          </p>
          <Carrousel images={images} />
        </div>
      </div>
    </div>
  );
}

export default Project;
