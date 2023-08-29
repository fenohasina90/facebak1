import React from 'react';
import '../css/main.css';

function Left() {
    return (
        <div className="left">

            <div className="img">
                <img src="image/323451973_732365921619161_3564231273178315562_n.jpg" alt="Profile" />
                <p>Koto Kely</p>
            </div>

            <div className="img">
                <img src="image/friend.png" alt="Friends" />
                <p>Friends</p>
            </div>

            <div className="img">
                <img src="image/saved.png" alt="Saved" />
                <p>Saved</p>
            </div>

            <div className="img">
                <img src="image/group.png" alt="Groups" />
                <p>Groups</p>
            </div>

            <div className="img">
                <img src="image/marketplace.png" alt="Marketplace" />
                <p>Marketplace</p>
            </div>

            <div className="img">
                <img src="image/watch.png" alt="Watch" />
                <p>Watch</p>
            </div>

            <div className="img">
                <img src="image/down_arrow.png" alt="See more" />
                <p>See more</p>
            </div>

            <hr />

            <h2>Your shortcuts</h2>
            <p className="edit">Edit</p>

            <div className="shortcuts">
                <img src="image/shortcuts_1.png" alt="Mobile Games" />
                <p>MOBILE GAMES</p>
            </div>

            <div className="shortcuts">
                <img src="image/shortcuts_2.jpeg" alt="Online Education" />
                <p>Online Education</p>
            </div>

            <div className="shortcuts">
                <img src="image/shortcuts_3.webp" alt="Food Lovers" />
                <p>Food Lovers</p>
            </div>

            <div className="shortcuts">
                <img src="image/shortcuts_4.png" alt="Social Media Academy" />
                <p>Social Media Academy</p>
            </div>

            <div className="shortcuts">
                <img src="image/shortcuts_5.webp" alt="PC Shop" />
                <p>PC Shop</p>
            </div>

            <div className="shortcuts">
                <img src="image/down_arrow.png" alt="See more" />
                <p>See more</p>
            </div>

        </div>
    );
}

export default Left;
