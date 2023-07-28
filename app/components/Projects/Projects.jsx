"use client";
import React, { useEffect, useState } from "react";
import "./Projects.min.css";
import CardProjects from "../Card-projects/CardProjects";
import ModalProject from "../ModalProject/ModalProject";
import { projectList } from "../../datas/projectList";

function Projects(props) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(null);
  const [filteredProjectId, setFilteredProjectId] = useState(null);

  const chooseOneProject = (projectId) => {
    setFilteredProjectId(projectId);
  };

  const handleClickOpenModal = (index) => {
    setSelectedProjectIndex(index);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedProjectIndex(null);
    setIsModalOpen(false);
  };

  const handleResize = (e) => {
    if (e.matches) {
      setFilteredProjectId(null);
    }
  };

  const blockScroll = () => {
    if (isModalOpen) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }
  };
  useEffect(() => {
    blockScroll();
  }, [isModalOpen]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 930px)");
    mediaQuery.addEventListener("change", handleResize);
    return () => {
      mediaQuery.removeEventListener("change", handleResize);
    };
  }, [filteredProjectId]);

  return (
    <section className="projects" ref={props.sectionRef}>
      <h2>Mon Portfolio</h2>
      <p>Un aperçu de mes projets</p>
      <div className="projects-zone">
        <div className="cards-projects-zone">
          {projectList
            .filter(
              (project) =>
                filteredProjectId === null || project.id === filteredProjectId
            )
            .map((project, index) => (
              <CardProjects
                onClick={() => handleClickOpenModal(index)}
                key={index}
                overlayClassName={props.overlayClassName}
                {...project}
              />
            ))}
        </div>
        <ul className="select-project-zone">
          {projectList.map((project) => (
            <li
              className={filteredProjectId === project.id ? " active" : ""}
              onClick={() => chooseOneProject(project.id)}
              data-id={project.id}
              title={`projet n° ${project.id}`}
              key={project.id}
            >
              {project.id}
            </li>
          ))}
        </ul>
      </div>
      {isModalOpen && (
        <ModalProject
          style={{ display: "block" }}
          projectIndex={selectedProjectIndex}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
        />
      )}
    </section>
  );
}

export default Projects;
