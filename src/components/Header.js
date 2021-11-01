import menuIcon from '../assets/menu-icon.svg';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <Link className="site-title" to="/">
        Draw This!
      </Link>
      <div className="button-container">
        <button className="menuButton">
          <img src={menuIcon} alt="Open menu" />
        </button>
      </div>
    </header>
  );
};

export default Header;
