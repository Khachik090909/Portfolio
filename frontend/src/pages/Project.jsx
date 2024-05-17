import React from "react";
import "./project.scss";
import Carrousel from "../components/Swiper";
import geocod1 from "../assets/captureGeocode/1.png";
import geocod2 from "../assets/captureGeocode/2.png";
import geocod3 from "../assets/captureGeocode/3.png";
import geocod4 from "../assets/captureGeocode/4.png";
import geocod5 from "../assets/captureGeocode/5.png";
import geocod6 from "../assets/captureGeocode/6.png";

import { useUserContext } from "../contexte/UserContext";
function Project() {
  const { darkMode } = useUserContext();
  const images = [geocod1, geocod2, geocod3, geocod4, geocod5, geocod6];
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
        <div className="project-2">
          <h1>titre du projet</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
            sed maxime quaerat nam sint ut culpa, dolore soluta aliquid! Minus
            commodi expedita ipsum voluptatem sunt, in voluptate odit sapiente
            provident.
          </p>
          <Carrousel images={images} />
        </div>
        <div className="project-3">
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
