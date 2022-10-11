import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { projectsData } from "../data/projectsData";
import { motion } from "framer-motion";
const Project = (props) => {
  const [currentProject, setcurrentProject] = useState(
    projectsData[props.pnumber]
  );
  const [left, setLeft] = useState();
  const [top, setTop] = useState();
  const [size, setSize] = useState();
  useEffect(() => {
    setLeft(Math.floor(Math.random() * 200 + 700) + "px");
    setTop(Math.floor(Math.random() * 200 + 150) + "px");
    setSize("scale(" + (Math.random() + 0.7) + ")");
  }, []);
  const variants = {
    initial: {
      opacity: 0,
      transition: {
        duration: 0.5,
      },
      x: 100,
    },
    visible: {
      opacity: 1,
      x: 0,
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.3 },
      x: -100,
    },
  };

  return (
    <motion.div
      className="project-main"
      initial="initial"
      animate="visible"
      exit="exit"
      variants={variants}
    >
      <div className="project-content">
        <h1>{currentProject.title}</h1>
        <p>{currentProject.date}</p>
        <ul className="languages">
          {currentProject.languages.map((item) => {
            return <li key={item}>{item}</li>;
          })}
        </ul>
      </div>
      <div className="img-content">
        <div className="img-container hover">
          <span>
            <h3>{currentProject.title}</h3>
            <p>{currentProject.infos}c</p>
          </span>
          <img
            src={currentProject.img}
            alt={currentProject.title}
            className="img"
          ></img>
        </div>
        <div className="button-container">
          <a
            className="hover"
            href={currentProject.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="button">Voir le site</span>
          </a>
        </div>
      </div>
      <span
        className="random-circle"
        style={{ left: left, top: top, transform: size }}
      ></span>
    </motion.div>
  );
};

export default Project;
