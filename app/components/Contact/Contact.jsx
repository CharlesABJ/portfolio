import React from "react";
import "./Contact.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faComment } from "@fortawesome/free-solid-svg-icons";
import Form from "../Form/Form";

function Contact(props) {
  return (
    <section
      data-aos={props.dataAos}
      className="contact"
      ref={props.sectionRef}
    >
      <h2>Contactez-Moi</h2>
      <p>Envoyez-moi un message</p>
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
                  title="Pour la France 🇫🇷: +33 6 30 08 65 92 👋"
                  href="tel:+41763694154"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  +41 76 369 41 54
                </a>
              </li>
              <li>
                <a
                  href="http://wa.me/41763694154"
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
        <Form />
      </div>
    </section>
  );
}

export default Contact;
