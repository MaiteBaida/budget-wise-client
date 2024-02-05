import './Logo.scss';
import logo from '../../assets/svg/logo.svg';
import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link className='logo' to='/'>
        <img className='logo__img' src={logo} alt='logo'/>
    </Link>
  );
}

export default Logo;