import React from "react";
import { useState } from "react";

function Comment({commentId}) {
    const [comment, setComment] = useState(null);

    return (
        <div className="comment-container">
            <h3>{}</h3>
        </div>
    )
}

export default Comment;