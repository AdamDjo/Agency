import React from "react";
import ContactForm from "../components/ContactForm";
import Logo from "../components/Logo";
import Mouse from "../components/Mouse";
import Navigation from "../components/Navigation";
import CopyToClipboard from "react-copy-to-clipboard";
import SocialNetwork from "../components/SocialNetwork";
import Buttons from "../components/Buttons";
import { motion } from "framer-motion";
const Contact = () => {
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
    <main>
      <Mouse></Mouse>
      <motion.div
        className="contact"
        variants={variants}
        exit="exit"
        animate="visible"
        initial="initial"
      >
        <Navigation></Navigation>
        <Logo></Logo>
        <ContactForm></ContactForm>
        <div className="contact-infos">
          <div className="address">
            <div className="content">
              <h4>Adresse</h4>
              <p>14 rue lapalace</p>
              <p>64 Biarritz</p>
            </div>
          </div>
          <div className="phone">
            <div className="content">
              <h4>Téléphone</h4>
              <CopyToClipboard text="25555555" className="hover">
                <p
                  style={{ cursor: "pointer" }}
                  className="clipboard"
                  onClick={() => alert("Téléphone copié !")}
                >
                  25555555
                </p>
              </CopyToClipboard>
            </div>
          </div>

          <div className="email">
            <div className="content">
              <h4>Email</h4>
              <CopyToClipboard
                text="adambenmessaoud2@gmail.com"
                className="hover"
              >
                <p
                  style={{ cursor: "pointer" }}
                  className="clipboard"
                  onClick={() => alert("Email copié !")}
                >
                  adambenmessaoud2@gmail.com
                </p>
              </CopyToClipboard>
            </div>
          </div>
          <SocialNetwork></SocialNetwork>
          <div className="crédits">
            <p>Adam @2022 - developed with love </p>
          </div>
        </div>
        <Buttons left={"/projet-4"}></Buttons>
      </motion.div>
    </main>
  );
};

export default Contact;
