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
import linkedin from "../assets/svg/lincedin.svg";

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
            Avant de me reconvertir en développeur web, j'ai exercé plusieurs
            métiers variés qui, bien qu'ils semblent éloignés du développement à
            première vue, m'ont apporté des compétences précieuses. En tant
            qu'ingénieur, j'ai acquis la capacité de concevoir et de structurer
            des solutions complexes, une compétence que j'applique aujourd'hui
            dans la création d'architectures logicielles robustes. Mon
            expérience en tant que comptable m'a appris à être rigoureux avec
            les chiffres et à penser de manière analytique, ce qui s'avère
            crucial pour aborder les algorithmes et la logique de programmation.
            Avec une grande curiosité et une forte capacité d'apprentissage,
            j'ai pu réussir ma reconversion en développement web sans grande
            difficulté. Mon parcours me permet d'aborder chaque projet avec une
            perspective unique, en combinant une solide base technique avec des
            compétences analytiques et créatives.
          </p>

          <div className="social-networks">
            <button
              className="img-icon"
              onClick={() =>
                (window.location.href = "mailto:sahakyan0909@gmail.com")
              }
            >
              <img src={facebook} alt="Facebook" />
            </button>
            <button
              className="img-icon"
              onClick={() =>
                window.open("https://github.com/Khachik090909", "_blank")
              }
            >
              <img src={github} alt="GitHub" />
            </button>
            <button
              className="img-icon"
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/khachik-sahakyan-b4a52a291/",
                  "_blank"
                )
              }
            >
              <img src={linkedin} alt="LinkedIn" />
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
