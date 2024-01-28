"use client";
import React, { useState } from "react";
import "./About.min.css";
function About(props) {
  const [seeMore, setSeeMore] = useState("Voir plus");

  const handleClickSeeMore = () => {
    seeMore === "Voir plus"
      ? setSeeMore("Voir moins")
      : setSeeMore("Voir plus");
  };

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <section data-aos={props.dataAos} className="about" ref={props.sectionRef}>
      <h2>À Propos de moi</h2>
      <p>Qui suis-je exactement ?</p>
      <div className="about-zone">
        <div className="illustration">
          <img
            onMouseEnter={() => handleMouseEnter()}
            onMouseLeave={() => handleMouseLeave()}
            src={
              isHovered
                ? "../../assets/images/about-image-colored.webp"
                : "../../assets/images/about-image.webp"
            }
            alt="une autre photo de moi"
          />
        </div>
        <div className="presentation">
          <h3>Un développeur web Front-End </h3>
          <p>
            Bonjour à vous qui lisez cette description ! <br /> Je m'appelle
            Charles ABJ,{" "}
            <span className="title-pointer" title="le 3 novembre 2000😁🎂">
              j'ai 23 ans
            </span>{" "}
            et je suis développeur Front-End.
            <br />
            <br />
            Aussi loin que je m'en souvienne, j'ai toujours été attiré par la
            création. <br /> Que ce soit par l'écriture de scénario, par la
            conception de jeu de rôle ou encore par la programmation. <br />
            Vous l'aurez compris j'adore créer. Mais ce qui me fascine
            particulièrement dans la programmation, c'est la capacité de voir
            rapidement les résultats de notre travail et de pouvoir les partager
            en un clic avec le reste du monde !
            <br />
            <br />
          </p>
          <details>
            <summary onClick={() => handleClickSeeMore()}>{seeMore}</summary>
            <p>
              {/* Si vous recherchez
              <span> un développeur enthousiaste, curieux et dédié</span>,
              n'hésitez pas à me contacter ! <br /> Jetez un œil à mon portfolio
              pour découvrir mes réalisations et en apprendre davantage sur mes
              compétences et mon expérience. */}
              <div>
                Je suis actuellement&nbsp;
                {/* <span>à la recherche d'une alternance</span> en tant que&nbsp; */}
                <span>
                  en alternance chez <br />
                  <p class="signature">
                    <p>
                      <a href="https://sequane.fr" target="_blank">
                        <span class="site"></span>S
                        <span class="relever">é</span>q
                        <span class="relever">uaNe</span>
                      </a>
                    </p>
                  </p>
                </span>
                en tant que&nbsp;
                <span>développeur frontend junior !</span> <br />
              </div>
            </p>
          </details>{" "}
        </div>
      </div>
    </section>
  );
}

export default About;
