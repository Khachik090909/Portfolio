import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../contexte/UserContext";
import "./NavBar.scss";
import darc from "../assets/svg/moon.svg";
import day from "../assets/svg/day-mode.svg";

function NavBar() {
  const navigate = useNavigate();
  const { darkMode, setDarkMode } = useUserContext();
  const navPath = [
    { name: "Home", path: "/" },
    { name: "Contact", path: "/contact" },
    { name: "About Me", path: "/aboutme" },
    { name: "Project", path: "/project" },
  ];
  return (
    <div className="navbar">
      <h3>Portfolio.</h3>
      <div className="darc-mode ">
        <button className="day-mode dark-icon" onClick={() => setDarkMode(22)}>

          <img src={day} alt="day" />

        </button>
        <input
          type="range"
          min="22"
          max="233"
          onChange={(e) => setDarkMode(e.target.value)}
          value={darkMode}
        />
        <button
          className="night-mode dark-icon"
          onClick={() => setDarkMode(233)}
        >


            <img src={darc} alt="night" />

        

        </button>
      </div>

      <div className="nav-bar-container">
        {navPath.map((item) => (
          <button
            className="nav-bar-item"
            key={item.name}
            onClick={() => navigate(item.path)}
            style={
              window.location.pathname === item.path
                ? {
                    color: "rgb(44, 102, 194)",
                  }
                : {}
            }
          >
            {item.name}
          </button>
        ))}
      </div>
    </div>
  );
}

export default NavBar;
