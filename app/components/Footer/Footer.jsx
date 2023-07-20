import React from "react";
import "./Footer.css";

function Footer(props) {
  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <footer>
      <h3>Charles ABJ</h3>
      <p>Developpeur Fronted</p>
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
            <i className="fa-brands fa-github"></i>
          </a>
        </li>
        <li>
          <a
            title="Whatsapp"
            href="https://api.whatsapp.com/qr/UJSL5CKGZELRD1?autoload=1&app_absent=0"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-whatsapp"></i>
          </a>
        </li>
        <li>
          <a
            title="Messenger"
            href=""
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-facebook-messenger"></i>
          </a>
        </li>
      </ul>
      <span>© charlesabj - 2023. Tous droits réservés.</span>
      {/* Thank you https://icones8.fr/icons !! */}
    </footer>
  );
}

export default Footer;
