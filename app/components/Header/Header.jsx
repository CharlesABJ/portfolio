"use client";
import React, { useEffect, useState } from "react";
import "./Header.css";
// Import the FontAwesomeIcon component
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUp,
  faXmark,
  faBarsStaggered,
} from "@fortawesome/free-solid-svg-icons";
import { faFacebookMessenger } from "@fortawesome/free-brands-svg-icons";
const home = (
  <svg
    stroke="currentColor"
    fill="currentColor"
    strokeWidth="0"
    viewBox="0 0 1024 1024"
    height="1em"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M946.5 505L560.1 118.8l-25.9-25.9a31.5 31.5 0 0 0-44.4 0L77.5 505a63.9 63.9 0 0 0-18.8 46c.4 35.2 29.7 63.3 64.9 63.3h42.5V940h691.8V614.3h43.4c17.1 0 33.2-6.7 45.3-18.8a63.6 63.6 0 0 0 18.7-45.3c0-17-6.7-33.1-18.8-45.2zM568 868H456V664h112v204zm217.9-325.7V868H632V640c0-22.1-17.9-40-40-40H432c-22.1 0-40 17.9-40 40v228H238.1V542.3h-96l370-369.7 23.1 23.1L882 542.3h-96.1z"></path>
  </svg>
);

const about = (
  <svg
    stroke="currentColor"
    fill="currentColor"
    strokeWidth="0"
    viewBox="0 0 1024 1024"
    height="1em"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M858.5 763.6a374 374 0 0 0-80.6-119.5 375.63 375.63 0 0 0-119.5-80.6c-.4-.2-.8-.3-1.2-.5C719.5 518 760 444.7 760 362c0-137-111-248-248-248S264 225 264 362c0 82.7 40.5 156 102.8 201.1-.4.2-.8.3-1.2.5-44.8 18.9-85 46-119.5 80.6a375.63 375.63 0 0 0-80.6 119.5A371.7 371.7 0 0 0 136 901.8a8 8 0 0 0 8 8.2h60c4.4 0 7.9-3.5 8-7.8 2-77.2 33-149.5 87.8-204.3 56.7-56.7 132-87.9 212.2-87.9s155.5 31.2 212.2 87.9C779 752.7 810 825 812 902.2c.1 4.4 3.6 7.8 8 7.8h60a8 8 0 0 0 8-8.2c-1-47.8-10.9-94.3-29.5-138.2zM512 534c-45.9 0-89.1-17.9-121.6-50.4S340 407.9 340 362c0-45.9 17.9-89.1 50.4-121.6S466.1 190 512 190s89.1 17.9 121.6 50.4S684 316.1 684 362c0 45.9-17.9 89.1-50.4 121.6S557.9 534 512 534z"></path>
  </svg>
);

const projects = (
  <svg
    stroke="currentColor"
    fill="currentColor"
    strokeWidth="0"
    viewBox="0 0 24 24"
    height="1em"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M6 22h15v-2H6.012C5.55 19.988 5 19.805 5 19s.55-.988 1.012-1H21V4c0-1.103-.897-2-2-2H6c-1.206 0-3 .799-3 3v14c0 2.201 1.794 3 3 3zM5 8V5c0-.805.55-.988 1-1h13v12H5V8z"></path>
    <path d="M8 6h9v2H8z"></path>
  </svg>
);

const skills = (
  <svg
    stroke="currentColor"
    fill="currentColor"
    strokeWidth="0"
    viewBox="0 0 24 24"
    height="1em"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g>
      <path fill="none" d="M0 0h24v24H0z"></path>
      <path d="M3.161 4.469a6.5 6.5 0 0 1 8.84-.328 6.5 6.5 0 0 1 9.178 9.154l-7.765 7.79a2 2 0 0 1-2.719.102l-.11-.101-7.764-7.791a6.5 6.5 0 0 1 .34-8.826zm1.414 1.414a4.5 4.5 0 0 0-.146 6.21l.146.154L12 19.672l5.303-5.304-3.535-3.535-1.06 1.06a3 3 0 1 1-4.244-4.242l2.102-2.103a4.501 4.501 0 0 0-5.837.189l-.154.146zm8.486 2.828a1 1 0 0 1 1.414 0l4.242 4.242.708-.706a4.5 4.5 0 0 0-6.211-6.51l-.153.146-3.182 3.182a1 1 0 0 0-.078 1.327l.078.087a1 1 0 0 0 1.327.078l.087-.078 1.768-1.768z"></path>
    </g>
  </svg>
);

const contact = (
  <svg
    stroke="currentColor"
    fill="currentColor"
    strokeWidth="0"
    viewBox="0 0 24 24"
    height="1em"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M16 2H8C4.691 2 2 4.691 2 8v13a1 1 0 0 0 1 1h13c3.309 0 6-2.691 6-6V8c0-3.309-2.691-6-6-6zm4 14c0 2.206-1.794 4-4 4H4V8c0-2.206 1.794-4 4-4h8c2.206 0 4 1.794 4 4v8z"></path>
    <path d="M7 9h10v2H7zm0 4h7v2H7z"></path>
  </svg>
);

function Header(props) {
  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  const [openNav, setOpenNav] = useState(false);

  const handleClickOpenNav = () => {
    const navElements = document.querySelectorAll(".nav-on");
    const off = document.querySelectorAll(".off");
    if (!openNav) {
      navElements.forEach((e) => (e.style.display = "block"));
      off.forEach((e) => (e.style.display = "none"));
    } else {
      navElements.forEach((e) => (e.style.display = "none"));
      off.forEach((e) => (e.style.display = "block"));
    }
    setOpenNav(!openNav);
  };

  //Rénitialiser la barre de navigation lors du passage du mode mobile à desktop
  const handleResize = (e) => {
    if (openNav && e.matches) {
      handleClickOpenNav();
    }
  };
  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 930px)");
    mediaQuery.addEventListener("change", handleResize);

    return () => {
      mediaQuery.removeEventListener("change", handleResize);
    };
  }, [openNav]);

  return (
    <header>
      <div
        onClick={() => scrollToSection(props.homeSectionRef)}
        className="logo off"
      >
        <img
          title="Charles ABJ"
          className={props.logoClassName}
          src={props.logoSrc}
          alt="It's me ;)"
        />
      </div>
      {/* <FontAwesomeIcon icon={faFacebookMessenger} /> */}
      <nav>
        <ul>
          <li className="nav-responvsive">
            <ul>
              <li onClick={() => scrollToSection(props.homeSectionRef)}>
                <span title="Accueil" className="nav-on">
                  {home}
                </span>
              </li>
              <li onClick={() => scrollToSection(props.aboutSectionRef)}>
                <span className="nav-off active">À propos</span>
                <span title="À propos" className="nav-on">
                  {about}
                </span>
              </li>
              <li onClick={() => scrollToSection(props.projectsSectionRef)}>
                <span className="nav-off">Portfolio</span>
                <span title="Portfolio" className="nav-on">
                  {projects}
                </span>
              </li>
              <li onClick={() => scrollToSection(props.skillsSectionRef)}>
                <span className="nav-off">Compétences</span>
                <span title="Compétences" className="nav-on">
                  {skills}
                </span>
              </li>

              <li onClick={() => scrollToSection(props.contactSectionRef)}>
                <span className="nav-off">Contacter</span>
                <span title="Contacter" className="nav-on">
                  {contact}
                </span>
              </li>
              <li className="off" onClick={props.handleClickChangeMode}>
                <FontAwesomeIcon
                  title={props.titleChangeMode}
                  icon={props.iconChangeMode}
                />
              </li>
            </ul>
          </li>
          <li className="hidden" onClick={() => handleClickOpenNav()}>
            <FontAwesomeIcon
              title={openNav ? "Fermer" : "Ouvrir"}
              icon={openNav ? faXmark : faBarsStaggered}
            />
          </li>
        </ul>
      </nav>
      <div className="up" onClick={() => scrollToSection(props.homeSectionRef)}>
        <FontAwesomeIcon icon={faArrowUp} />
      </div>
    </header>
  );
}

export default Header;
