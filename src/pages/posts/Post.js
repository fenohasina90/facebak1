import React, { useState, useEffect } from "react";

export default function GetPost() {
    const [postData, setPostData] = useState([]);

    useEffect(() => {
        ListPost(setPostData); // Passer setPostData en argument
    }, []);

    return (
        <div>
            {postData.map((value) => (
                <div key={value.id}>
                    <p>{value.id}</p>
                    <p>{value.title}</p>
                    <p>{value.content}</p>
                </div>
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
