import React, { useRef } from "react";
//import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const form = useRef();
  /*
  const sendEmail = (e) => {
    e.preventDefault();
    const currentForm = form.current;
    const formmess = document.querySelector(".form-message");
    if (currentForm == null) return;
    emailjs
      .sendForm(
        "service_k2f177v",
        "template_uwlhoik",
        currentForm,
        process.env.REACT_APP_ID
      )
      .then(
        (result) => {
          console.log(result.text);
          currentForm.reset();
          if (formmess == null) return;
          formmess.innerHTML = "<p class='success'>Message envoyé</p>";
          setTimeout(() => {
            formmess.innerHTML = "";
          }, 2500);
        },
        (error) => {
          console.log(error.text);
          currentForm.reset();
          if (formmess == null) return;
          formmess.innerHTML =
            "<p class='success'>une erreur s'est produite, veuillez réessayer</p>";
          setTimeout(() => {
            formmess.innerHTML = "";
          }, 2500);
        }
      );
  };
*/
  return (
    <div className="form-container">
      <h2>Contactez-nous</h2>
      <form ref={form} onSubmit={sendEmail} className="form-content">
        <label>Nom</label>
        <input
          type="text"
          name="user_name"
          required
          autoComplete="off"
          id="name"
        />
        <label>Email</label>
        <input
          type="email"
          name="user_email"
          required
          autoComplete="off"
          id="email"
        />
        <label>Message</label>
        <textarea name="message" autoComplete="off" id="mess" />
        <input type="submit" value="Send" className="hover button" />
      </form>
      <div className="form-message"></div>
    </div>
  );
};

export default ContactForm;
