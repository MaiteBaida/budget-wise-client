import "./Header.scss";
// import { useNavigate } from "react-router-dom";
import Logo from "../Logo/Logo";

function Header({ user }) {
  return (
    <header className="header">
      {/* <p>{user.first_name}</p> */}
      <Logo />
      <nav className="header__container"></nav>
    </header>
  );
}

export default Header;
