import "./Header.scss";
// import { useNavigate } from "react-router-dom";
import Logo from "../Logo/Logo";

function Header() {
    return (
      <header className="header">
          <Logo />
        <nav className="header__container"></nav>
      </header>
    );
  }
  
  export default Header;