import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUsers, faBell, faUser } from '@fortawesome/free-solid-svg-icons';
import '../css/style.css';

function NavBar() {
  return (
    
    <div className="navbar">
        <div className="position">
            <a href='http://localhost:3000/home'><p className="logo">Facebak</p></a>
            

            <div className="search-bar">
              <input type="text" placeholder="Search ..." />
            </div>

            <ul>
                <li><a href='http://localhost:3000/home'><FontAwesomeIcon icon={faHome} /></a></li>
                <li><a href='http://localhost:3000/home'><FontAwesomeIcon icon={faUsers} /></a></li>
                <li><a href='http://localhost:3000/home'><FontAwesomeIcon icon={faBell} /></a></li>
                <li><a href='http://localhost:3000/home'><FontAwesomeIcon icon={faUser} /></a></li>
            </ul> 
        </div>
    </div>
    
  );
}

export default NavBar;
