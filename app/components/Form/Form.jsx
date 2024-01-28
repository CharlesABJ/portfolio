import React from "react";
import "./Form.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faPaperPlane } from "@fortawesome/free-solid-svg-icons";

function Form(props) {
  return (
    <form
      name="contact"
      className="project-contact"
      method="POST"
      data-netlify="true"
    >
      <input type="hidden" name="form-name" value="contact" />

      <h3>
        <FontAwesomeIcon icon={faPaperPlane} />
        Parlez moi de votre projet{" "}
      </h3>
      <div>
        <label htmlFor="name">Nom</label>
        <input required type="text" id="name" placeholder="Écrivez votre nom" />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input
          required
          type="text"
          id="email"
          name="email"
          placeholder="Écrivez votre email"
        />
      </div>
      <div>
        <label htmlFor="project">Projet</label>
        <textarea
          required
          id="project"
          name="project"
          placeholder="Présentez votre projet"
        ></textarea>
      </div>

      <button className="submit" type="submit">
        Envoyer
        <FontAwesomeIcon icon={faArrowRight} />
      </button>
    </form>
  );
}

export default Form;
