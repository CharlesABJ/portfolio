import React from "react";
import "./Skills.css";
import CardSkills from "../CardSkills/CardSkills";
import { skillsLanguageList } from "../../datas/skillsLanguageList";
import { skillsLogiList } from "../../datas/skillsLogiList";
function Skills(props) {
  return (
    <section className="skills" ref={props.sectionRef}>
      <h2>Mes Compétences</h2>
      <p>Mes principales compétences</p>

      <div className="languages-logi">
        <div className="languages">
          <h3>
            <i className="fa-solid fa-code"></i>Mes langages
          </h3>
          <div className="languages-icons">
            {skillsLanguageList.map((e) => (
              <CardSkills
                key={e.id}
                cardTitle={e.cardTitle}
                cardUrl={e.cardUrl}
              />
            ))}
          </div>
        </div>

        <div className="logi">
          <h3>
            <i className="fa-solid fa-toolbox"></i>Mes outils
          </h3>
          <div className="logi-icons">
            {skillsLogiList.map((e) => (
              <CardSkills
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
