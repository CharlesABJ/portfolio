import React from "react";
import "./Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookMessenger,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
function Home(props) {
  return (
    <section className="home" ref={props.sectionRef}>
      <div className="presentation-profile">
        <div className="presentation">
          <h1>
            Développeur
            <br />
            Front-End
            <span role="img" aria-label="hand">
              👋🏽
            </span>
          </h1>
          <p>
            Bienvenue sur ma page ! Je suis Charles ABJ. <br /> Passionné depuis
            toujours par la création, je suis un développeur constamment animé
            par le désir de concrétiser et partager des réalisations avec le
            monde !
          </p>

          <ul>
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
                title="LinkedIn"
                href="https://www.linkedin.com/in/charlesabj-78753b182/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </li>
            <li>
              <a
                title="Messenger"
                href="https://m.me/100094215251917"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon id="font-icon" icon={faFacebookMessenger} />
              </a>
            </li>
          </ul>
        </div>
        <div className="profile">
          <img src="../../assets/images/profil.png" alt="C'est moi :)" />
        </div>
      </div>
      <div className="technos">
        <p>Mes Technos</p>
        <ul className="technos-icons">
          <li title="HTML">
            <img src="../../assets/images/html.svg" alt="HTML" />
          </li>
          <li title="CSS">
            <img src="../../assets/images/css.svg" alt="CSS" />
          </li>
          <li title="JavaScript">
            <img src="../../assets/images/javascript.svg" alt="JavaScript" />
          </li>
          <li title="React">
            <img src="../../assets/images/react.svg" alt="React" />
          </li>
          <li title="Next.js">
            <img src="../../assets/images/next.svg" alt="Next.js" />
          </li>
          <li title="SASS">
            <img src="../../assets/images/sass.svg" alt="SASS" />
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Home;
