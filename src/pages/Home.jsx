import { useEffect, useState } from "react";
import { typeAndDeleteText, typeText } from "../components/functiones";
import { useUserContext } from "../contexte/UserContext";
import "./Home.scss";

import curser from "../assets/cueseur.png";
import heroDev from "../assets/svg/heroDev.svg";
function Home() {
  const dev = [
    "Frontend Developer",
    "Backend Developer",
    "Fullstack Developer",
  ];
  const { darkMode } = useUserContext();
  const [text, setText] = useState("");
  const [cordonnerCursor, setCordonnerCursor] = useState({ x: 0, y: 0 });
  const [index, setIndex] = useState(0);
  const [rotate, setRotate] = useState(0);
  const [move, setMove] = useState({ x: 0, y: 0 });
  const dimensionHeight = window.innerHeight;
  const dimensionWidth = window.innerWidth;

  useEffect(() => {
    if (index < dev.length - 1) {
      typeAndDeleteText(dev[index], setText, setIndex, index);
    } else {
      typeText(dev[index], setText, 100);
    }
  }, [index]);
  useEffect(() => {
    setMove({
      x: cordonnerCursor.x - dimensionWidth / 2,
      y: cordonnerCursor.y - dimensionHeight / 2,
    });
    setRotate(
      (Math.atan2(
        cordonnerCursor.y - dimensionHeight / 2,
        cordonnerCursor.x - dimensionWidth / 2
      ) *
        180) /
        Math.PI
    );
  }, [cordonnerCursor]);

  const handlerMouseMove = (e) => {
    if (e.clientX > dimensionWidth - 55 && e.clientY > dimensionHeight - 50) {
      setCordonnerCursor({ x: dimensionWidth - 65, y: dimensionHeight - 50 });
    } else if (e.clientX > dimensionWidth - 65) {
      setCordonnerCursor({ x: dimensionWidth - 65, y: e.clientY });
    } else if (e.clientY > dimensionHeight - 50) {
      setCordonnerCursor({ x: e.clientX, y: dimensionHeight - 50 });
    } else {
      setCordonnerCursor({ x: e.clientX - 20, y: e.clientY - 20 });
    }
  };
  return (
    <div
      className="home"
      onMouseMove={(e) => handlerMouseMove(e)}
      style={{
        backgroundColor: `rgb(
          ${255 - darkMode}, ${255 - darkMode}, ${255 - darkMode}`,
        color:
          darkMode < 125
            ? `rgb(${darkMode - 22}, ${darkMode - 22}, ${darkMode - 22})`
            : `rgb(${darkMode + 22}, ${darkMode + 22}, ${darkMode + 22})`,
      }}
    >
      <div className="home-container">
        <div className="info">
          <h3> Bonjour, je m'appelle</h3>
          <h1>Khachik Sahakyan</h1>
          <h3>
            je suis un {text}
            <span className="cursor-text"></span>
          </h3>
          <p>
            Développeur web reconverti, j'ai récemment terminé une formation
            intensive en présentiel à la Wild Code School. En mars 2024, j'ai
            validé avec succès le titre professionnel de niveau 5 (Bac +2)
          </p>
        </div>
        <div className="download-cv">
          <a
            href="cv.zip"
            className="download"
            download="Resume PDF"
            style={{
              color:
                darkMode < 125
                  ? `rgb(${darkMode - 22}, ${darkMode - 22}, ${darkMode - 22})`
                  : `rgb(${darkMode + 22}, ${darkMode + 22}, ${darkMode + 22})`,
            }}
          >
            Download CV
          </a>
        </div>
        <div className="hero">
          <img src={heroDev} alt="hero" />
        </div>
      </div>
      <footer className="tecno">
        <h1>React.js</h1>
        <h1>Node.js</h1>
        <h1>Express.js</h1>
        <h1>MySql</h1>
        <h1>Figma</h1>
      </footer>

      {cordonnerCursor.y > 50 && (
        <img
          src={curser}
          className="curser"
          style={{
            left: cordonnerCursor.x,
            top: cordonnerCursor.y,
            transform: "rotate(" + rotate + "deg)",
          }}
        />
      )}
    </div>
  );
}

export default Home;
