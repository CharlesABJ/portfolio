import React from "react";
import "./Contact.css";

function Contact(props) {
  return (
    <section className="contact" ref={props.sectionRef}>
      <h2>Contactez-Moi</h2>
      <p>Envoyez moi un message</p>
      <div className="contact-zone">
        <ul className="classic-contact">
          <h4>
            <i className="fa-regular fa-comment"></i>Discutons ensemble
          </h4>
          <ul>
            <p>Email</p>
            <li>
              <a className="email" href="mailto:biadjeu.charles@gmail.com">
                biadjeu.charles@gmail.com
              </a>
            </li>
          </ul>
          <ul>
            <p>Whatsapp</p>
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
                Écrivez-moi <i className="fa-solid fa-arrow-right"></i>
              </a>
            </li>
          </ul>
          <ul>
            <p>Messenger</p>
            <li>@CharlesABJ</li>
            <li>
              <a
                href="https://m.me/100094215251917"
                target="_blank"
                rel="noopener noreferrer"
              >
                Écrivez-moi<i className="fa-solid fa-arrow-right"></i>
              </a>
            </li>
          </ul>
        </ul>
        <form method="POST" action="/" className="project-contact">
          <h4>
            <i className="fa-regular fa-paper-plane"></i>Parlez moi de votre
            projet{" "}
          </h4>
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
              type="text"
              id="project"
              placeholder="Présentez votre projet"
            />
          </div>

          <button className="submit" type="submit">
            Envoyer <i className="fa-solid fa-arrow-right"></i>
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
