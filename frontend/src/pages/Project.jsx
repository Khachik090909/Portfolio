import React from "react";
import "./project.scss";
import Carrousel from "../components/Swiper";

import { useUserContext } from "../contexte/UserContext";
function Project() {
  const { darkMode } = useUserContext();
  const images = [
    "https://swiperjs.com/demos/images/nature-1.jpg",
    "https://swiperjs.com/demos/images/nature-2.jpg",
    "https://swiperjs.com/demos/images/nature-3.jpg",
    "https://swiperjs.com/demos/images/nature-4.jpg",
    "https://swiperjs.com/demos/images/nature-5.jpg",
    "https://swiperjs.com/demos/images/nature-6.jpg",
    "https://swiperjs.com/demos/images/nature-7.jpg",
    "https://swiperjs.com/demos/images/nature-8.jpg",
    "https://swiperjs.com/demos/images/nature-9.jpg",
    "https://swiperjs.com/demos/images/nature-4.jpg",
    "https://swiperjs.com/demos/images/nature-5.jpg",
    "https://swiperjs.com/demos/images/nature-6.jpg",
    "https://swiperjs.com/demos/images/nature-7.jpg",
    "https://swiperjs.com/demos/images/nature-8.jpg",
    "https://swiperjs.com/demos/images/nature-9.jpg",
  ];
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
