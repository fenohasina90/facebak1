import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faComment } from '@fortawesome/free-solid-svg-icons'; 
import "./Post.css";

function Post({ id, title, content }) {
    const [likes, setLikes] = useState(0);
    const [userLiked, setUserLiked] = useState(false);

    const handleLikeClick = () => {
        if (!userLiked) {
            setLikes(likes + 1);
            setUserLiked(true);
        } else {
            setLikes(likes - 1);
            setUserLiked(false);
        }
    };

    return (
        <div className="container">
            <p className="title">{title}</p>
            <p className="content">{content}</p>
            <br />

            <hr />
            <p className="count">
                <FontAwesomeIcon className="iconeCount" icon={faThumbsUp}/> {likes} {likes === 1 ? 'liked' : 'like'}
            </p>
            <hr />
            <div className="reaction">
                <button  className={`icons ${userLiked ? 'liked' : ''}`} onClick={handleLikeClick}
                          style={{ border: "none", background: "none", cursor: "pointer" }}
                          >
                    <FontAwesomeIcon className="icone" icon={faThumbsUp}/> <span className="span">Like</span>
                </button>
                <p className="icons"><FontAwesomeIcon className="icone" icon={faComment} /> <span className="span">Comment</span></p>
            </div>
            <hr />
        </div>
    );
}

export default function GetPost() {
    const [postData, setPostData] = useState([]);

    useEffect(() => {
        ListPost(setPostData);
    }, []);

    return (
        <div className="DataGet">
            {postData.map((value) => (
                <Post key={value.id} id={value.id} title={value.title} content={value.content} />
            ))}
        </div>
    );
}

function ListPost(setPostData) {
    fetch("http://127.0.0.1:8080/posts")
        .then((response) => response.json())
        .then((data) => {
            setPostData(data);
        })
        .catch((error) => console.log(error));
}
