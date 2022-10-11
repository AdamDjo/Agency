import React from "react";

import Buttons from "../components/Buttons";
import Logo from "../components/Logo";
import Mouse from "../components/Mouse";
import Navigation from "../components/Navigation";
import Project from "../components/Project";

const Projet4 = () => {
  return (
    <main>
      <Mouse></Mouse>
      <div className="project">
        <Navigation></Navigation>
        <Logo></Logo>
        <Project pnumber={3}></Project>
        <Buttons left={"/projet-3"} right={"/contact"}></Buttons>
      </div>
    </main>
  );
};
export default Projet4;
