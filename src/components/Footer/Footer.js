import "./Footer.scss";
import Logo from "../Logo/Logo";
import github from "../../assets/icons/github.svg";
import linkedin from "../../assets/icons/linkedin.svg";

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__txt">Developed by Maite Baida</p>
      <div className="footer__icon-container">
        <a href="https://github.com/MaiteBaida">
          <img className="footer__icon-git" src={github} />
        </a>
        <a href="https://www.linkedin.com/in/maitebaida/">
          <img className="footer__icon-linkedin" src={linkedin} />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
