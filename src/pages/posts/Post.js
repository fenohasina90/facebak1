import React, { useState, useEffect } from "react";

function Post({ id, title, content }) {
    return (
        <div>
            <p>{id}</p>
            <p>{title}</p>
            <p>{content}</p>
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
