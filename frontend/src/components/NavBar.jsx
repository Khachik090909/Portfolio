import React from "react";
import { useNavigate } from "react-router-dom";
import "./NavBar.scss";

function NavBar() {
  const navigate = useNavigate();
  const navPath = [
    { name: "Home", path: "/" },
    { name: "Contact", path: "/contact" },
    { name: "About Me", path: "/aboutme" },
    { name: "Project", path: "/project" },
  ];
  return (
    <div className="navbar">
      <h3>Portfolio.</h3>
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
