import React, { useState } from "react";
import "./Projects.css";
import CardProjects from "../Card-projects/CardProjects";
import Arrow from "../Arrow/Arrow";
import ModalProject from "../ModalProject/ModalProject";
import { projectList } from "../../datas/projectList";

function Projects(props) {
  const [startIndex, setStartIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(null);

  const handleClickNextProject = () => {
    const lastIndex = projectList.length - 1;
    setStartIndex((prevIndex) => (prevIndex === lastIndex ? 0 : prevIndex + 1));
  };

  const handleClickPreviousProject = () => {
    const lastIndex = projectList.length - 1;
    setStartIndex((prevIndex) => (prevIndex === 0 ? lastIndex : prevIndex - 1));
  };

  const handleClickOpenModal = (index) => {
    setSelectedProjectIndex(index);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedProjectIndex(null);
    setIsModalOpen(false);
  };

  const visibleProjects = projectList.slice(startIndex, startIndex + 2);

  return (
    <section className="projects" ref={props.sectionRef}>
      <h2>Mes Projets</h2>
      <p>Un aperçu de mes projets</p>
      <div className="projects-zone">
        <div className="cards-projects-zone">
          {visibleProjects.map((project, index) => (
            <CardProjects
              onClick={() => handleClickOpenModal(startIndex + index)}
              key={index}
              titleProject={project.titleProject}
              imageSrc={project.imageSrc}
              missionProjectResume={project.missionProjectResume}
              technoName={project.technoName}
            />
          ))}
        </div>
        <div className="arrow-zone">
          <Arrow
            onClick={handleClickPreviousProject}
            className="arrow-left fa-solid fa-chevron-up"
          />
          <Arrow
            onClick={handleClickNextProject}
            className="arrow-right fa-solid fa-chevron-up"
          />
        </div>
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
