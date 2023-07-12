import React, { useEffect, useState } from "react";
import "./Header.css";

function Header(props) {
  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  const [openNav, setOpenNav] = useState(false);

  const handleClickOpenNav = () => {
    const navElements = document.querySelectorAll("header nav ul li");
    if (!openNav) {
      navElements.forEach((e) => (e.style.display = "block"));
    }
    if (openNav) {
      setOpenNav(true);
    }
  };

  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem("darkMode");
    return savedMode !== null ? JSON.parse(savedMode) : false;
  });

  const handleClickChangeMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem("darkMode", JSON.stringify(newMode));
  };

  useEffect(() => {
    const root = document.documentElement.style;
    if (darkMode) {
      root.setProperty("--couleur-fond", "#1d1d1d");
      root.setProperty("--couleur-fond2", "#1a1a1a");
      root.setProperty("--couleur-fond-header", "#1e1e1e");
      root.setProperty("--couleur-texte", "#E8E9EB");
      root.setProperty("--couleur-texte-hover", "#E8E9EBC5");
      root.setProperty("--couleur-span", "#f19766");
      root.setProperty("--couleur-nav", "#6c6c6c");
      root.setProperty("--couleur-up-button", "#E8E9EB");
      root.setProperty("--couleur-nav-hover", "#606060");
      root.setProperty("--couleur-nav-active", "#4d4d4d");
      root.setProperty("--couleur-image-hover", "#ffffff69");
      root.setProperty("--couleur-h3", "#b1b1b1");
      root.setProperty("--couleur-box-shadow", "#0000001a");
    } else {
      root.setProperty("--couleur-fond", "#fff");
      root.setProperty("--couleur-fond2", "#f9f9f9");
      root.setProperty("--couleur-fond-header", "#fff");
      root.setProperty("--couleur-texte", "#2d2e32");
      root.setProperty("--couleur-texte-hover", "#2c2c2cc5");
      root.setProperty("--couleur-span", "#0E6899");
      root.setProperty("--couleur-nav", "#6c6c6c");
      root.setProperty("--couleur-nav-hover", "#606060");
      root.setProperty("--couleur-image-hover", "#ffffff69");
      root.setProperty("--couleur-nav-active", "#4d4d4d");
      root.setProperty("--couleur-h3", "#4d4d4d");
      root.setProperty("--couleur-up-button", "#fff");
      root.setProperty("--couleur-box-shadow", "#0000001a");
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
            <i className={`fa-regular fa-${darkMode ? "sun" : "moon"}`}></i>
          </li>
          <li onClick={handleClickOpenNav}>
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
