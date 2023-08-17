import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUsers, faBell, faUser } from '@fortawesome/free-solid-svg-icons';
import '../css/style.css';

function NavBar() {
  return (
    <nav className="navbar">
      <div className="logo">   

        Facebak
      </div>
      <div className="search-bar">
        <input type="text" placeholder="Rechercher..." />
      </div>
      <div className="nav-links">
        <a href="#"><FontAwesomeIcon icon={faHome} /> Accueil</a>
        <a href="#"><FontAwesomeIcon icon={faUsers} /> Amis</a>
        <a href="#"><FontAwesomeIcon icon={faBell} /> Notifications</a>
      </div>
      <div className="profile">
        <FontAwesomeIcon icon={faUser} />
      </div>
    </nav>
  );
}

export default NavBar;
