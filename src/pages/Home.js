import { motion } from "framer-motion";
import React from "react";
import Buttons from "../components/Buttons";
import DynamicText from "../components/DynamicText";
import Mouse from "../components/Mouse";
import Navigation from "../components/Navigation";
import SocialNetwork from "../components/SocialNetwork";

const Home = () => {
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
    <div>
      <Mouse></Mouse>
      <motion.div
        className="home "
        initial="initial"
        animate="visible"
        exit="exit"
        variants={variants}
      >
        <Navigation></Navigation>
        <SocialNetwork></SocialNetwork>
        <div className="home-main">
          <div className="main-content">
            <motion.h1
              drag
              dragConstraints={{
                left: -250,
                right: 950,
                top: -200,
                bottom: 250,
              }}
            >
              {" "}
              FS Agency
            </motion.h1>
            <h2>
              {" "}
              <DynamicText></DynamicText>
            </h2>
          </div>
        </div>
        <Buttons right={"/projet-1"}></Buttons>
      </motion.div>
    </div>
  );
};

export default Home;
