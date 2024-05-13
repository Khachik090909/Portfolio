import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { typeAndDeleteText, typeText } from "../components/functiones";
import { useUserContext } from "../contexte/UserContext";
import "./Home.scss";
import facebook from "../assets/svg/facebook.svg";
import github from "../assets/svg/github.svg";
import lincedin from "../assets/svg/lincedin.svg";

function Home() {
  const navigate = useNavigate();
  const dev = [
    "Frontend Developer",
    "Backend Developer",
    "Fullstack Developer",
  ];
  const { darkMode } = useUserContext();
  const [text, setText] = useState("");

  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < dev.length - 1) {
      typeAndDeleteText(dev[index], setText, setIndex, index);
    } else {
      typeText(dev[index], setText, 100);
    }
  }, [index]);

  return (
    <div
      className="home"
      style={{
        backgroundColor: `rgb(
          ${255 - darkMode}, ${255 - darkMode}, ${255 - darkMode}`,
        color:
          darkMode < 125
            ? `rgb(${darkMode - 22}, ${darkMode - 22}, ${darkMode - 22})`
            : `rgb(${darkMode + 22}, ${darkMode + 22}, ${darkMode + 22})`,
      }}
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
        </div>
        <div>
          <img src="/src/assets/svg/hero.svg" alt="hero" />
        </div>
      </section>
      <footer className="tecno">
        <h1>React.js</h1>
        <h1>Node.js</h1>
        <h1>Express.js</h1>
        <h1>MySql</h1>
        <h1>Figma</h1>
      </footer>
    </div>
  );
}

export default Home;
