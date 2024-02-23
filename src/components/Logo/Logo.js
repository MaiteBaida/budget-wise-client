import "./Logo.scss";
import logo from "../../assets/logo/logo.svg";
import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link to="/home">
      <img className="logo__img" src={logo} alt="logo" />
    </Link>
  );
}

export default Logo;
