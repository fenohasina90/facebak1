import React from 'react';
import '../css/main.css';

function Right() {
    return (
        <div className="right">
            
            <div className="first_wrapper">

                <div className="page">

                    <h2>Your Pages and Profiles</h2>
                    <div className="menu">
                        <i className="fa-solid fa-ellipsis"></i>
                    </div>

                </div>

                <div className="page_img">
                    <img src="image/page.jpg" alt="Page" />
                    <p>Web Designer</p>
                </div>

                <div className="page_icon">
                    <i className="fa-regular fa-bell"></i>
                    <p>20 Notifications</p>
                </div>

                <div className="page_icon">
                    <i className="fa-solid fa-bullhorn"></i>
                    <p>Create Promotion</p>
                </div>

            </div>

            <hr />

            <div className="second_wrapper">

                <h2>Birthdays</h2>

                <div className="img_and_tag">

                    <img src="image/gift.png" alt="Gift" />
                    <p><span>Senuda De Silva</span> and <span>2 others</span> have birthdays today</p>
                </div>

            </div>

        </div>
    );
}

export default Right;
