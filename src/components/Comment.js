import React from "react";
import { useState } from "react";
import { useEffect } from "react";

function Comment({commentId}) {
    const [comment, setComment] = useState(null);

    const getComment = async function() {
        try {
            const requestOptions = {
                method: "GET",
                credentials: "include",
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            }

            const result = await fetch(process.env.REACT_APP_PUBLIC_URL + "/posts/comments/ids/" +  commentId, requestOptions);

            if (result.status === 200) {
                const real = await result.json();
                setComment(real);
            }
        }
        catch(error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getComment();
    }, [])


    return (
        <div className="comment-container">
            {comment && <>
                <h3>{comment.content}</h3>
            </>}
        </div>
    )
}

export default Comment;