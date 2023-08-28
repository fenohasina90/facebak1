import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUsers, faBell, faUser } from '@fortawesome/free-solid-svg-icons';
import '../css/style.css';

function NavBar() {
  return (
    
    <div className="navbar">
        <div className="position">
            <p className="logo">Facebak</p>

            <div className="search-bar">
              <input type="text" placeholder="Search ..." />
            </div>

            <ul>
                <li><FontAwesomeIcon icon={faHome} /> HOME</li>
                <li><FontAwesomeIcon icon={faUsers} /> FRIENDS</li>
                <li><FontAwesomeIcon icon={faBell} /> NOTIFICATIONS</li>
            </ul>
            
            <p className="profile"><FontAwesomeIcon icon={faUser}/></p>
        </div>
    </div>
    
  );
}

export default NavBar;
