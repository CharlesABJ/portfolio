"use client";
// import Font Awesome CSS

import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
// Tell Font Awesome to skip adding the CSS automatically
// since it's already imported above
config.autoAddCss = false;
import React, { useEffect, useRef, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Assurez-vous d'importer le fichier CSS de AOS

import "./page.min.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";
import Recommandations from "./components/Recommandations/Recommandations";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

function page() {
  const homeSectionRef = useRef(null);
  const aboutSectionRef = useRef(null);
  const skillsSectionRef = useRef(null);
  const projectsSectionRef = useRef(null);
  const contactSectionRef = useRef(null);

  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedMode = localStorage.getItem("darkMode");
      setDarkMode(savedMode !== null ? JSON.parse(savedMode) : false);
    }
  }, []);

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
      root.setProperty("--couleur-texte", "#f6f6f6");
      root.setProperty("--couleur-texte-hover", "#8c8c8cc5");
      root.setProperty("--couleur-span", "#f19766");
      root.setProperty("--couleur-nav", "#a6a6a6");
      root.setProperty("--couleur-up-button", "#2e2e2e");
      root.setProperty("--couleur-nav-hover", "#606060");
      root.setProperty("--couleur-nav-active", "#dcdcdc");
      root.setProperty("--couleur-hover", "#2b2b2bce");
      root.setProperty("--couleur-image-hover", "#ffffffde");
      root.setProperty("--couleur-h3", "#b1b1b1");
      root.setProperty("--couleur-box-shadow", "#00000035");
      root.setProperty("--couleur-border", "#4e5255");
      root.setProperty("--couleur-p", "#d0d0d0db");
      root.setProperty("--couleur-background-button", "#1d1d1d");
      root.setProperty("--couleur-background-button-active", "#2b2b2bce");
    } else {
      root.setProperty("--couleur-fond", "#fff");
      root.setProperty("--couleur-fond2", "#f9f9f9");
      root.setProperty("--couleur-fond-header", "#fff");
      root.setProperty("--couleur-texte", "#2d2e32");
      root.setProperty("--couleur-texte-hover", "#2c2c2cc5");
      root.setProperty("--couleur-span", "#0E6899");
      root.setProperty("--couleur-nav", "#6c6c6c");
      root.setProperty("--couleur-nav-hover", "#606060");
      root.setProperty("--couleur-hover", "#d1d1d1");
      root.setProperty("--couleur-image-hover", "#ffffff69");
      root.setProperty("--couleur-nav-active", "#4d4d4d");
      root.setProperty("--couleur-h3", "#4d4d4d");
      root.setProperty("--couleur-up-button", "#fff");
      root.setProperty("--couleur-box-shadow", "#0000001a");
      root.setProperty("--couleur-border", "#2d2e32");
      root.setProperty("--couleur-p", "#2d2e32db");
      root.setProperty("--couleur-background-button", "#e6e6e6c2");
      root.setProperty("--couleur-background-button-active", "#fff");
    }
  }, [darkMode]);
  useEffect(() => {
    // Initialisez AOS
    AOS.init({
      offset: 0, // Décalage (en pixels) depuis le bas de la fenêtre pour déclencher l'animation
      duration: 800, // Durée de l'animation
      easing: "ease-in-out",
      delay: 0, // Délai avant le démarrage de l'animation (en millisecondes)
      once: true, // Appliquer l'animation une seule fois
    });
  }, []);
  return (
    <div>
      <Header
        homeSectionRef={homeSectionRef}
        aboutSectionRef={aboutSectionRef}
        skillsSectionRef={skillsSectionRef}
        projectsSectionRef={projectsSectionRef}
        contactSectionRef={contactSectionRef}
        logoSrc={
          darkMode
            ? "../../assets/images/logo-dark.webp"
            : "../../assets/images/logo-light.webp"
        }
        logoClassName={darkMode ? "dark-mode" : "light-mode"}
        handleClickChangeMode={() => handleClickChangeMode()}
        iconChangeMode={darkMode ? faSun : faMoon}
      />
      <Home
        dataAos="fade-up"
        sectionRef={homeSectionRef}
        profilSrc={
          darkMode
            ? "../../assets/images/logo-dark.webp"
            : "../../assets/images/logo-light.webp"
        }
      />
      <About dataAos="fade-up" sectionRef={aboutSectionRef} />
      <Projects
        dataAos="fade-up"
        sectionRef={projectsSectionRef}
        overlayClassName={darkMode ? "dark-mode" : null}
        darkMode={darkMode}
      />
      <Skills dataAos="fade-up" sectionRef={skillsSectionRef} />
      <Recommandations />
      <Contact dataAos="fade-up" sectionRef={contactSectionRef} />
      <Footer
        aboutSectionRef={aboutSectionRef}
        skillsSectionRef={skillsSectionRef}
        projectsSectionRef={projectsSectionRef}
      />
    </div>
  );
}

export default page;
