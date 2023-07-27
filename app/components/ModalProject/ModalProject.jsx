import React from "react";
import "./ModalProject.css";
import TechnoModal from "../TechnoModal/TechnoModal";
import { projectList } from "../../datas/projectList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUpRightFromSquare,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function ModalProject(props) {
  // Récupérer le projet spécifique de projectList en utilisant projectIndex
  const project = projectList[props.projectIndex];

  return (
    <div style={props.style} className={props.className || "modal-container"}>
      <div onClick={props.onClose} className="overlay trigger"></div>
      <div className="modal">
        <div onClick={props.onClose} className="leave-modal">
          <FontAwesomeIcon icon={faXmark} />
        </div>
        <div className="modal-presentation">
          <h3 className="responsive-create">
            <span>{project.titleProject}</span>
          </h3>
          <div className="quick-presentation">
            <div className="image">
              <img
                src={project.imageSrc}
                alt={project.titleProject + " responsive"}
              />
            </div>
            <div className="presentation">
              <h3 className="responsive-delete">
                <span>{project.titleProject}</span>
              </h3>
              <h4>
                Année : <span> {project.yearProject}</span>
              </h4>
              <h4>Mission :</h4>
              <p>{project.missionProject}</p>
              <h4>Points forts et réalisations :</h4>
              <ul className="strong-points">
                {project.strongPoint.map((e, index) => (
                  <li key={index}>{e}</li>
                ))}
              </ul>

              <h4>Technologies utilisées</h4>
              <ul>
                {project.technoName.map((techno, index) => (
                  <TechnoModal key={index} technoName={techno} />
                ))}
              </ul>
              <div className="code-and-website">
                <a
                  href={project.gitHubProject}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Code
                  <FontAwesomeIcon icon={faGithub} />
                </a>
                {project.linkProject ? (
                  <a
                    href={project.linkProject}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Voir le site
                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                  </a>
                ) : null}
              </div>
            </div>
          </div>
          <div className="pictures-of-project">
            <img src={project.pictures} alt={project.titleProject} />
            <img src="../../assets/images/test.png" alt="test" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalProject;
