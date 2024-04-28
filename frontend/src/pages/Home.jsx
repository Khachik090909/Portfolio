import { useEffect, useState } from "react";
import { typeAndDeleteText, typeText } from "../components/functiones";
import "./Home.scss";
import facebook from "../assets/svg/facebook.svg";
import github from "../assets/svg/github.svg";
import lincedin from "../assets/svg/lincedin.svg";
import curser from "../assets/cueseur.png";
import hero from "../assets/hero.svg";

function Home() {
  const dev = [
    "Frontend Developer",
    "Backend Developer",
    "Fullstack Developer",
  ];
  const [text, setText] = useState("");
  const [cordonnerCursor, setCordonnerCursor] = useState({ x: 0, y: 0 });
  const [move, setMove] = useState({ x: 0, y: 0 });
  const [rotate, setRotate] = useState(0);

  const dimensionHeight = window.innerHeight;
  const dimensionWidth = window.innerWidth;

  const [index, setIndex] = useState(0);
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

  return (
    <div
      className="home"
      onMouseMove={(e) => setCordonnerCursor({ x: e.clientX, y: e.clientY })}
    >
      <section className="home-container">
        <div className="info">
          <h3> bonjour, je m'appelle</h3>
          <h1>Khachik Sahakyan</h1>
          <h4>
            je suis un {text}
            <span className="cursor-text"></span>
          </h4>
          <p>
            "Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book"
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
          <button className="dawnload-cv">
            {" "}
            <div className="dawnload-cv-text">
              <h2>Télécharger mon CV</h2>
            </div>
          </button>
        </div>
        <div className="hero"></div>
      </section>
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
