import React from "react";
import "./Home.css";
function About(props) {
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

export default About;
