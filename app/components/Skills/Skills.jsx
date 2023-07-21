import React from "react";
import "./Skills.css";
import CardSkills from "../CardSkills/CardSkills";
import { skillsLanguageList } from "../../datas/skillsLanguageList";
import { skillsLogiList } from "../../datas/skillsLogiList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faToolbox } from "@fortawesome/free-solid-svg-icons";
function Skills(props) {
  return (
    <section className="skills" ref={props.sectionRef}>
      <h2>Mes Compétences</h2>
      <p>Mes principales compétences</p>

      <div className="languages-logi">
        <div className="languages">
          <h3>
            <FontAwesomeIcon icon={faCode} /> Mes langages
          </h3>
          <div className="languages-icons">
            {skillsLanguageList.map((e) => (
              <CardSkills
                key={e.id}
                cardTitle={e.cardTitle}
                cardUrl={e.cardUrl}
                dataInfo={e.subtitle}
              />
            ))}
          </div>
        </div>

        <div className="logi">
          <h3>
            <FontAwesomeIcon icon={faToolbox} /> Mes outils
          </h3>
          <div className="logi-icons">
            {skillsLogiList.map((e) => (
              <CardSkills
                className="tooltip"
                dataInfo={e.subtitle}
                key={e.id}
                cardTitle={e.cardTitle}
                cardUrl={e.cardUrl}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
