"use client";
import React, { useEffect, useState } from "react";
import "./Projects.min.css";
import CardProjects from "../Card-projects/CardProjects";
import ModalProject from "../ModalProject/ModalProject";
import { projectList } from "../../datas/projectList";

function Projects(props) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(null);
  const [filteredProjectId, setFilteredProjectId] = useState(1);

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
  const handleResize2 = (e) => {
    if (e.matches) {
      setFilteredProjectId(1);
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

  useEffect(() => {
    const mediaQuery2 = window.matchMedia("(max-width: 930px)");
    mediaQuery2.addEventListener("change", handleResize2);
    return () => {
      mediaQuery2.removeEventListener("change", handleResize);
    };
  }, [filteredProjectId]);

  return (
    <section className="projects" ref={props.sectionRef}>
      <h2>Mon Portfolio</h2>
      <p>Un aperçu de mes projets</p>
      <div className="projects-zone">
        <div className="cards-projects-zone">
          {projectList.map((project, index) => (
            <CardProjects
              onClick={() => handleClickOpenModal(index)}
              key={index}
              projectClassName={
                filteredProjectId === project.id ? "is-active" : ""
              }
              imageSrc={project.imageSrc}
              titleProject={project.titleProject}
              missionProjectResume={project.missionProjectResume}
              technoName={project.technoName}
            />
          ))}
        </div>
        <ul className="select-project-zone">
          {projectList.map((project, index) => (
            <li
              className={filteredProjectId === project.id ? " active" : ""}
              onClick={() => chooseOneProject(project.id)}
              data-id={project.id}
              title={`projet n° ${project.id} - ${project.titleProject}`}
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
          overlayClassName={props.overlayClassName}
          onClose={handleCloseModal}
          darkMode={props.darkMode}
        />
      )}
    </section>
  );
}

export default Projects;
