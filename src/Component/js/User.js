import React from 'react';
import '../css/main.css';

function User() {
    return (
        <div className="friends_post">

            <div className="friend_post_top">

                <div className="img_and_name">

                    <img src="image/323451973_732365921619161_3564231273178315562_n.jpg" alt="Post" />

                    <div className="friends_name">
                        <p className="friends_name">
                            Senuda De Silva
                        </p>
                        <p className="time">16h.<i className="fa-solid fa-user-group"></i></p>
                    </div>

                </div>

                <div className="menu">

                    <i className="fa-solid fa-ellipsis"></i>

                </div>

            </div>

            <img src="image/323451973_732365921619161_3564231273178315562_n.jpg" alt="Post" />

            <div className="info">

                <div className="emoji_img">
                    <img src="image/like.png" alt="Like" />
                    <img src="image/haha.png" alt="Haha" />
                    <img src="image/heart.png" alt="Heart" />
                    <p>You, Charith Disanayaka and 25K others</p>
                </div>

                <div className="comment">
                    <p>421 Comments</p>
                    <p>1.3K Shares</p>
                </div>

            </div>

            <hr />

            <div className="like">

                <div className="like_icon">
                    <i className="fa-solid fa-thumbs-up activi"></i>
                    <p>Like</p>
                </div>

                <div className="like_icon">
                    <i className="fa-solid fa-message"></i>
                    <p>Comments</p>
                </div>

                <div className="like_icon">
                    <i className="fa-solid fa-share"></i>
                    <p>Share</p>
                </div>

            </div>

            <hr />

            <div className="comment_warpper">

                <img src="image/profile.png" alt="Profile" />
                <div className="circle"></div>

                <div className="comment_search">

                    <input type="text" placeholder="Write a comment" />
                    <i className="fa-regular fa-face-smile"></i>
                    <i className="fa-solid fa-camera"></i>
                    <i className="fa-regular fa-note-sticky"></i>

                </div>

            </div>

        </div>
    );
}

export default User;
