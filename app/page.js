"use client";
// import Font Awesome CSS
import "@fortawesome/fontawesome-svg-core/styles.css";

import { config } from "@fortawesome/fontawesome-svg-core";
// Tell Font Awesome to skip adding the CSS automatically
// since it's already imported above
config.autoAddCss = false;
import React, { useRef } from "react";
import "./page.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";
import Recommandations from "./components/Recommandations/Recommandations";

function page() {
  const homeSectionRef = useRef(null);
  const aboutSectionRef = useRef(null);
  const skillsSectionRef = useRef(null);
  const projectsSectionRef = useRef(null);
  const contactSectionRef = useRef(null);
  return (
    <div>
      <Header
        homeSectionRef={homeSectionRef}
        aboutSectionRef={aboutSectionRef}
        skillsSectionRef={skillsSectionRef}
        projectsSectionRef={projectsSectionRef}
        contactSectionRef={contactSectionRef}
      />
      <Home sectionRef={homeSectionRef} />
      <About sectionRef={aboutSectionRef} />
      <Projects sectionRef={projectsSectionRef} />
      <Skills sectionRef={skillsSectionRef} />
      <Recommandations />
      <Contact sectionRef={contactSectionRef} />
      <Footer
        aboutSectionRef={aboutSectionRef}
        skillsSectionRef={skillsSectionRef}
        projectsSectionRef={projectsSectionRef}
      />
    </div>
  );
}

export default page;
