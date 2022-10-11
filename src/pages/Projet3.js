import React from "react";

import Buttons from "../components/Buttons";
import Logo from "../components/Logo";
import Mouse from "../components/Mouse";
import Navigation from "../components/Navigation";
import Project from "../components/Project";

const Projet3 = () => {
  return (
    <main>
      <Mouse></Mouse>
      <div className="project">
        <Navigation></Navigation>
        <Logo></Logo>
        <Project pnumber={2}></Project>
        <Buttons left={"/projet-2"} right={"/projet-4"}></Buttons>
      </div>
    </main>
  );
};
export default Projet3;
