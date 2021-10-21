import menuIcon from '../assets/menu-icon.svg';

function Header() {
  return (
    <header>
      <button className="menuButton">
        <img src={menuIcon} alt="Open menu" />
      </button>
    </header>
  );
}

export default Header;
