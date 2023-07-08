"use client";

import React, { useEffect, useState } from "react";
import "./Header.css";

function Header(props) {
  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem("darkMode");
    return savedMode !== null ? JSON.parse(savedMode) : false;
  });

  const handleClickChangeMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem("darkMode", newMode);
  };

  useEffect(() => {
    if (darkMode) {
      document.documentElement.style.setProperty("--couleur-fond", "#1d1d1d");
      document.documentElement.style.setProperty("--couleur-fond2", "#1a1a1a");
      document.documentElement.style.setProperty(
        "--couleur-fond-header",
        " #1e1e1e"
      );
      document.documentElement.style.setProperty("--couleur-texte", "#E8E9EB");
      document.documentElement.style.setProperty(
        "--couleur-image-hover",
        "#fff"
      );
      document.documentElement.style.setProperty(
        "    --couleur-up-button",
        "#4d4d4d"
      );
      document.documentElement.style.setProperty("--couleur-h3", "#b1b1b1");
      document.documentElement.style.setProperty("--couleur-span", "#f19766");
    } else {
      document.documentElement.style.setProperty("--couleur-fond", "#fff");
      document.documentElement.style.setProperty("--couleur-fond2", "#f9f9f9");
      document.documentElement.style.setProperty(
        "--couleur-fond-header",
        " #fff"
      );
      document.documentElement.style.setProperty("--couleur-texte", "#2d2e32");
      document.documentElement.style.setProperty(
        "--couleur-texte-hover",
        "#2c2c2cc5"
      );
      document.documentElement.style.setProperty("--couleur-span", "#0E6899");
      document.documentElement.style.setProperty("--couleur-nav", "#6c6c6c");
      document.documentElement.style.setProperty(
        "--couleur-nav-hover",
        "#606060"
      );
      document.documentElement.style.setProperty(
        "--couleur-image-hover",
        "#ffffff69"
      );
      document.documentElement.style.setProperty(
        "--couleur-nav-active",
        "#4d4d4d"
      );
      document.documentElement.style.setProperty("--couleur-h3", "#4d4d4d");
      document.documentElement.style.setProperty(
        "    --couleur-up-button",
        "#fff"
      );
      document.documentElement.style.setProperty(
        "--couleur-box-shadow",
        "#0000001a"
      );
    }
  }, [darkMode]);

  return (
    <header>
      <div
        onClick={() => scrollToSection(props.homeSectionRef)}
        className="logo"
      >
        <img
          title="Charles ABJ"
          src="../../assets/images/profil.png"
          alt="It's me ;)"
        />
      </div>
      <nav>
        <ul>
          <li
            className="active"
            onClick={() => scrollToSection(props.aboutSectionRef)}
          >
            À propos
          </li>
          <li onClick={() => scrollToSection(props.skillsSectionRef)}>
            Mes compétences
          </li>
          <li onClick={() => scrollToSection(props.projectsSectionRef)}>
            Mes projets
          </li>
          <li onClick={() => scrollToSection(props.contactSectionRef)}>
            Me contacter
          </li>
          <li onClick={handleClickChangeMode}>
            {darkMode ? (
              <i className="fa-regular fa-sun"></i>
            ) : (
              <i className="fa-regular fa-moon"></i>
            )}
          </li>
          <li>
            <i className="fa-solid fa-bars-staggered"></i>
          </li>
        </ul>
      </nav>
      <div className="up" onClick={() => scrollToSection(props.homeSectionRef)}>
        <i className="fa-solid fa-arrow-up"></i>
      </div>
    </header>
  );
}

export default Header;
