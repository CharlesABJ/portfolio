import React from "react";
import "./ModalProject.css";
import TechnoModal from "../TechnoModal/TechnoModal";
import { projectList } from "../../datas/projectList";

function ModalProject(props) {
  // Récupérer le projet spécifique de projectList en utilisant projectIndex
  const project = projectList[props.projectIndex];

  return (
    <div className="modal-container">
      <div className="overlay trigger"></div>
      <div className="modal">
        <div className="leave-modal">
          <i className="fa-solid fa-xmark"></i>
        </div>

        <div className="modal-presentation">
          <div className="quick-presentation">
            <div className="image">
              <img
                src={project.imageSrc}
                alt={project.titleProject + " responsive"}
              />
            </div>
            <div className="presentation">
              <h3>
                <span>{project.titleProject}</span>
              </h3>
              <h4>
                Année : <span> {project.yearProject}</span>
              </h4>
              <h4>Mission :</h4>
              <p>{project.missionProject}</p>
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
                  Code<i className="fa-brands fa-github"></i>
                </a>
                <a
                  href={project.linkProject}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Voir le site
                  <i className="fa-solid fa-arrow-up-right-from-square"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="pictures-of-project">
            <div className="phone"></div>
            <div className="tablette"></div>
            <div className="desktop"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalProject;
