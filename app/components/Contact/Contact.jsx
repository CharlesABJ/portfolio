import React from "react";
import "./Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faComment,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";

function Contact(props) {
  return (
    <section className="contact" ref={props.sectionRef}>
      <h2>Contactez-Moi</h2>
      <p>Envoyez moi un message</p>
      <div className="contact-zone">
        <ul className="classic-contact">
          <li>
            <h3>
              <FontAwesomeIcon icon={faComment} />
              Discutons ensemble
            </h3>
          </li>
          <li>
            <ul>
              <li>
                <p>Email</p>
              </li>
              <li>
                <a className="email" href="mailto:charlesabj3@gmail.com">
                  charlesabj3@gmail.com
                </a>
              </li>
            </ul>
          </li>
          <li>
            {" "}
            <ul>
              <li>
                <p>Whatsapp</p>
              </li>
              <li>
                <a
                  href="tel:+41 754650320"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  +41 7 54 65 03 20
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/qr/UJSL5CKGZELRD1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Écrivez-moi <FontAwesomeIcon icon={faArrowRight} />
                </a>
              </li>
            </ul>
          </li>
          <li>
            <ul>
              <li>
                <p>Messenger</p>
              </li>
              <li>@CharlesABJ</li>
              <li>
                <a
                  href="https://m.me/100094215251917"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Écrivez-moi <FontAwesomeIcon icon={faArrowRight} />
                </a>
              </li>
            </ul>
          </li>
        </ul>
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          action="/"
          className="project-contact"
        >
          <input type="hidden" name="form-name" value="contact" />
          <h3>
            <FontAwesomeIcon icon={faPaperPlane} />
            Parlez moi de votre projet{" "}
          </h3>
          <div>
            <label htmlFor="name">Nom</label>
            <input
              required
              type="text"
              id="name"
              placeholder="Écrivez votre nom"
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              required
              type="text"
              id="email"
              placeholder="Écrivez votre email"
            />
          </div>
          <div>
            <label htmlFor="project">Projet</label>
            <textarea
              required
              id="project"
              placeholder="Présentez votre projet"
            ></textarea>
          </div>

          <button className="submit" type="submit">
            Envoyer
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
