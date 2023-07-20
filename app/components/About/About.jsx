import React, { useState } from "react";
import "./About.css";
function About(props) {
  const [seeMore, setSeeMore] = useState("Voir plus");

  const handleClickSeeMore = () => {
    seeMore === "Voir plus"
      ? setSeeMore("Voir moins")
      : setSeeMore("Voir plus");
  };
  return (
    <section className="about" ref={props.sectionRef}>
      <h2>À Propos de moi</h2>
      <p>Qui suis-je exactement ?</p>
      <div className="about-zone">
        <div className="illustration">
          <img src="../../assets/images/image.jpg" alt="" />
        </div>
        <div className="presentation">
          <h3>Un développeur web Front-End </h3>
          <p>
            Bonjour à vous qui lisez cette description ! <br /> Je m'appelles
            Charles ABJ, j'ai 22 ans et je suis développeur Front-End Junior.
            <br />
            <br />
            Aussi loin que je m'en souvienne, j'ai toujours été attiré par la
            création. <br /> Que ce soit par l'écriture de scénario, par la
            conception de jeu ou encore par la programation. <br />
            Vous l'aurez compris j'adore créer, mais ce qui me fascine
            particulièrement dans la programmation, c'est la capacité de voir
            rapidement les résultats de notre travail et de pouvoir les partager
            en un clic avec le reste du monde !
            <br />
            <br />
            <details>
              <summary onClick={() => handleClickSeeMore()}>{seeMore}</summary>
              Si vous recherchez{" "}
              <span> un développeur enthousiaste, curieux et dédié</span>,
              n'hésitez pas à me contacter ! <br /> Jetez un œil à mon portfolio
              pour découvrir mes réalisations et en apprendre davantage sur mes
              compétences et mon expérience.
              <br />
              <br />
              Je suis actuellement&nbsp;
              <span>à la recherche d'une alternance</span> en tant que&nbsp;
              <span>développeur frontend junior !</span> <br />
            </details>{" "}
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
