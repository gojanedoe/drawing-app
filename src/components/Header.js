import menuIcon from '../assets/menu-icon.svg';

function Header() {
  return (
    <header>
      <p>Draw This!</p>
      <div className="button-container">
        <button className="menuButton">
          <img src={menuIcon} alt="Open menu" />
        </button>
      </div>
    </header>
  );
}

export default Header;
