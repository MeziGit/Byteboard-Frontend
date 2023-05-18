import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Navbar } from "react-bootstrap";
const MAX_CONTENT_LENGTH = 150;


function PostSummary({post}) {
    const [author, setAuthor] = useState(null);
    const dateCreated = new Date(post.dateCreated);

    const getNumber = function(num) {
        return num > 10 ? num.toString() : "0" + num.toString(); 
    }


    const getAuthor = async function() {
        const requestOptions = {
            method: "GET",
            credentials: "include",
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        }

        let response;
        try {
            response = await fetch(process.env.REACT_APP_PUBLIC_URL + "/users/ids/" + post.authorId, requestOptions);
            
            if (response.status === 200) {
                const user = await response.json();
                setAuthor(user);
            }
            else
                alert(response.statusText);
        }
        catch(error) {
            alert("Error: " + error.message);
        }
       
    }
    useEffect(() => {
        getAuthor();
    }, [])

    
    return (
        <div className="post-summary-container">
            <h3 className="post-summary">{post.postTitle}</h3>
            <h4 className="post-summary post-summary-item">By {author && author.username}</h4>
            <h4 className="post-summary post-summary-item">{dateCreated.getFullYear()}-{getNumber(dateCreated.getMonth() + 1)}-{getNumber(dateCreated.getDate())}</h4>
            <p className="post-summary-desc">{post.postContent}</p>
        </div>
    )
}

export default PostSummary;