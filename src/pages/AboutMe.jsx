import { useState, useEffect } from "react";
import "./aboutMe.scss";
import { useUserContext } from "../contexte/UserContext";
import html from "../assets/icon-dev/html.svg";
import css from "../assets/icon-dev/css.svg";
import react from "../assets/icon-dev/react.svg";
import figma from "../assets/icon-dev/figma.svg";
import js from "../assets/icon-dev/js.svg";
import sql from "../assets/icon-dev/sql.svg";
import attaque from "../assets/icon-dev/attaque.png";
import attaque1 from "../assets/icon-dev/attaque1.png";
import facebook from "../assets/svg/facebook.svg";
import github from "../assets/svg/github.svg";
import lincedin from "../assets/svg/lincedin.svg";

function AboutMe() {
  const { darkMode } = useUserContext();
  const iconesName = [
    html,
    css,
    react,
    attaque,
    figma,
    js,
    sql,
    attaque1,
    html,
    css,
    react,
    figma,
    js,
    sql,
    html,
    css,
    react,
    figma,
    js,
    sql,
  ];
  const [icones, setIcones] = useState([]);
  const [loss, setLoss] = useState(false);
  useEffect(() => {
    const interval = setInterval(() => {
      if (loss === false) {
        const index = Math.floor(Math.random() * iconesName.length);
        const icone = {
          src: iconesName[index],
          x: Math.floor(Math.random() * window.innerWidth - 40),
          y: Math.floor(Math.random() * (window.innerHeight - 90) + 50),
        };
        setIcones((prevIcones) => [...prevIcones, icone]);
      }
    }, 1000);

    return () => clearInterval(interval); // Nettoyage de l'intervalle
  }, [loss]);
  const handleRemoveIcon = (indexToMove) => {
    if (
      icones[indexToMove].src === "/src/assets/icon-dev/attaque.png" ||
      icones[indexToMove].src === "/src/assets/icon-dev/attaque1.png"
    ) {
      setIcones([]);
      setLoss(true);
      const interval = setInterval(() => {
        const newIcones = [
          {
            src: iconesName[3],
            x: Math.floor(Math.random() * window.window.innerWidth - 40),
            y: Math.floor(Math.random() * (window.innerHeight - 90) + 50),
          },
          {
            src: iconesName[7],
            x: Math.floor(Math.random() * window.innerWidth - 40),
            y: Math.floor(Math.random() * (window.innerHeight - 90) + 50),
          },
        ];
        setIcones((prevIcones) => [...prevIcones, ...newIcones]);
      }, 100);

      // Nettoyer l'intervalle lors de la perte
      return () => clearInterval(interval);
    } else {
      setIcones((prevIcones) =>
        prevIcones.map((icon, index) =>
          index === indexToMove ? { ...icon, x: -100, y: -100 } : icon
        )
      );
    }
  };

  return (
    <div
      className="about-me"
      style={{
        backgroundColor: `rgb(${255 - darkMode}, ${255 - darkMode}, ${
          255 - darkMode
        })`,
      }}
    >
      <div
        className="about-me-container"
        style={{
          backgroundColor: `rgba(${255 - darkMode}, ${255 - darkMode}, ${
            255 - darkMode
          }, 0.9)`,
          color: `rgb(${darkMode - 22}, ${darkMode - 22}, ${darkMode - 22})`,
        }}
      >
        <div className="about-me-text">
          <h1>Khachik Sahakyan</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
            maiores nisi excepturi neque id aperiam aliquid. Ratione inventore
            sed nobis facilis dolorum ipsam placeat blanditiis ipsa quibusdam
            veniam id dolor maiores, magni modi quasi nesciunt impedit harum
            iure quam illum asperiores. Magni esse vitae hic praesentium
            consequatur eaque rerum fugit perferendis assumenda accusantium
            neque numquam, eum placeat animi, tenetur accusamus! Nesciunt dolore
            minus quam quod quasi molestiae minima in quisquam tenetur, quia
            quos natus libero tempore harum magnam, eligendi vero ab, omnis ut
            nobis.
          </p>
          <div className="social-networks">
            <button className="img-icon">
              <img src={facebook} />
            </button>
            <button className="img-icon">
              <img src={github} />
            </button>
            <button className="img-icon">
              <img src={lincedin} />
            </button>
          </div>
        </div>
        <div className="hero">
          <img src="/src/assets/svg/hero.svg" alt="" />
        </div>
      </div>
      {icones &&
        icones.map((icon, index) => (
          <button
            className="atrape-moi"
            onClick={() => handleRemoveIcon(index)}
            key={icon + index}
            style={{
              top: icon.y,
              left: icon.x,
            }}
          >
            <img src={icon.src} alt={icon} />
          </button>
        ))}
    </div>
  );
}

export default AboutMe;
