import React, { useState } from "react";
import { useUserContext } from "../contexte/UserContext";
import "./contact.scss";
import emailjs from "emailjs-com";
import contactPages from "../assets/svg/cahier.svg";

const ContactForm = () => {
  const dimensionWidth = window.innerWidth;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { darkMode } = useUserContext();
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_r4pepcj",
        "template_2vil8bd",
        formData,
        "thV9Nx8_7UFXosOQ4"
      )
      .then(
        (result) => {
          setFormData({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          console.log(error.text);
          alert("Une erreur est survenue, veuillez réessayer.");
        }
      );
  };

  return (
    <div
      onSubmit={handleSubmit}
      className="contact"
      style={{
        backgroundColor: `rgb(
      ${255 - darkMode}, ${255 - darkMode}, ${255 - darkMode}`,
        color:
          darkMode < 125 && dimensionWidth < 600
            ? `rgb(255 255 255)`
            : `rgb(0 0 0 1)`,
      }}
    >
      <img className="contact-pages" src={contactPages} alt="contactPages" />

      <div className="contact-form-title">
        <h1
          style={{
            color:
              darkMode > 125 && dimensionWidth < 600
                ? `rgb(255 255 255)`
                : `rgb(0 0 0 )`,
          }}
        >
          Me contacter
        </h1>
      </div>
      <form className="contact-form">
        <div className="imput-group">
          <label
            style={{
              color:
                darkMode > 125 && dimensionWidth < 600
                  ? `rgb(255 255 255)`
                  : `rgb(0 0 0 )`,
            }}
            htmlFor="name"
          >
            Nom:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            style={{
              borderColor:
                darkMode > 125 && dimensionWidth < 600
                  ? `rgb(255 255 255)`
                  : `rgb(0 0 0 )`,
            }}
          />
        </div>
        <div className="imput-group">
          <label
            htmlFor="email"
            style={{
              color:
                darkMode > 125 && dimensionWidth < 600
                  ? `rgb(255 255 255)`
                  : `rgb(0 0 0 )`,
            }}
          >
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={{
              borderColor:
                darkMode > 125 && dimensionWidth < 600
                  ? `rgb(255 255 255)`
                  : `rgb(0 0 0 )`,
            }}
          />
        </div>
        <div className="message">
          <label
            htmlFor="message"
            style={{
              color:
                darkMode > 125 && dimensionWidth < 600
                  ? `rgb(255 255 255)`
                  : `rgb(0 0 0 )`,
              borderColor:
                darkMode > 125 && dimensionWidth < 600
                  ? `rgb(255 255 255)`
                  : `rgb(0 0 0 )`,
            }}
          >
            Message:
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
        </div>
        <button
          type="submit"
          style={{
            color:
              darkMode > 125 && dimensionWidth < 600
                ? `rgb(255 255 255)`
                : `rgb(0 0 0 )`,
            borderColor:
              darkMode > 125 && dimensionWidth < 600
                ? `rgb(255 255 255)`
                : `rgb(0 0 0 )`,
          }}
        >
          Envoyer
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
