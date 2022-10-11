import React from "react";
import Buttons from "../components/Buttons";
import Logo from "../components/Logo";
import Mouse from "../components/Mouse";
import Navigation from "../components/Navigation";
import Project from "../components/Project";

const Projet1 = () => {
  return (
    <main>
      <Mouse></Mouse>
      <div className="project">
        <Navigation></Navigation>
        <Logo></Logo>
        <Project pnumber={0}></Project>
        <Buttons left={"/"} right={"/projet-2"}></Buttons>
      </div>
    </main>
  );
};

export default Projet1;
