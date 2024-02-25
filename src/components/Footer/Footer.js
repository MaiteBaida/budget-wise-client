import "./Footer.scss";
import github from "../../assets/icons/github.svg";
import linkedin from "../../assets/icons/linkedin.svg";
import React, { useEffect } from "react";

function Footer() {
  //function to keep footer below the body content without making it fixed on screen
  useEffect(() => {
    function positionFooter() {
      const contentHeight = document.body.clientHeight;
      const footerHeight = document.querySelector(".footer").clientHeight;
      const windowHeight = window.innerHeight;

      if (contentHeight + footerHeight < windowHeight) {
        document.querySelector(".footer").style.position = "fixed";
        document.querySelector(".footer").style.bottom = "0";
      } else {
        document.querySelector(".footer").style.position = "static";
      }
    }

    positionFooter();

    window.addEventListener("resize", positionFooter);

    return () => {
      window.removeEventListener("resize", positionFooter);
    };
  }, []);

  return (
    <footer className="footer">
      <p className="footer__txt">Developed by Maite Baida</p>
      <div className="footer__icon-container">
        <a href="https://github.com/MaiteBaida">
          <img className="footer__icon-git" src={github} alt="Github" />
        </a>
        <a href="https://www.linkedin.com/in/maitebaida/">
          <img
            className="footer__icon-linkedin"
            src={linkedin}
            alt="LinkedIn"
          />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
