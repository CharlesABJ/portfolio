import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookMessenger,
  faGithub,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

function Footer(props) {
  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <footer>
      <h3>Charles ABJ</h3>
      <p>Développeur Fronted</p>
      <ul className="nav">
        <li
          className="active"
          onClick={() => scrollToSection(props.aboutSectionRef)}
        >
          À propos
        </li>
        <li onClick={() => scrollToSection(props.skillsSectionRef)}>
          Compétences
        </li>
        <li onClick={() => scrollToSection(props.projectsSectionRef)}>
          Projets
        </li>
      </ul>
      <ul className="social">
        <li>
          <a
            title="Github"
            href="https://github.com/CharlesABJ"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </li>
        <li>
          <a
            title="Whatsapp"
            href="https://api.whatsapp.com/qr/UJSL5CKGZELRD1?autoload=1&app_absent=0"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faWhatsapp} />
          </a>
        </li>
        <li>
          <a
            title="Messenger"
            href="https://m.me/100094215251917"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faFacebookMessenger} />
          </a>
        </li>
      </ul>
      <span>© 2023 • Make with ❤️ By CharlesABJ </span>
      {/* Thank you https://icones8.fr/icons !! */}
    </footer>
  );
}

export default Footer;
