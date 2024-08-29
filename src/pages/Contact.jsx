import React, { useState } from "react";
import { useUserContext } from "../contexte/UserContext";
import "./contact.scss";
import emailjs from "emailjs-com";
import contactPages from "../assets/svg/cahier.svg";

const ContactForm = () => {
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
          darkMode < 125
            ? `rgb(${darkMode - 22}, ${darkMode - 22}, ${darkMode - 22})`
            : `rgb(${darkMode + 22}, ${darkMode + 22}, ${darkMode + 22})`,
      }}
    >
      <img className="contact-pages" src={contactPages} alt="contactPages" />

      <div className="contact-form-title">
        <h1>Me contacter</h1>
      </div>
      <form className="contact-form">
        <div>
          <label htmlFor="name">Nom:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Envoyer</button>
      </form>
    </div>
  );
};

export default ContactForm;
