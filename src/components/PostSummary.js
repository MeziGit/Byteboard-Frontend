import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Navbar } from "react-bootstrap";
import { AllComments } from "./AllComments";
import { CommentForm } from "./CommentForm";

const MAX_CONTENT_LENGTH = 300;

async function handleVote(id, vote) {
    try {

        const requestOptions = {
            method: "PUT",
            credentials: "include",
            body: JSON.stringify({
                postId: id,
                vote: vote
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        }

        const response = await fetch("http://localhost:1339/posts/vote", requestOptions)

        if (response.status === 200) {
            alert("Vote submitted")

        }
        else {

            let result = await response.json()
            alert(result.errorMessage)

        }

    } catch (error) {

        alert(error.message)
    }
}


function PostSummary({post}) {
    const [author, setAuthor] = useState(null);
    const dateCreated = new Date(post.dateCreated);
    const content = post.postContent.length > MAX_CONTENT_LENGTH ? post.postContent.substring(0, MAX_CONTENT_LENGTH) + "..." : post.postContent;


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


    const handleLike = async (event) => {
        event.preventDefault()

        await handleVote(post._id, 1)
    }

    const handleDislike = async (event) => {
        event.preventDefault()

        await handleVote(post._id, -1)
    }


    
    return (
        <div className="post-summary-container">
            <h3 className="post-summary">{post.postTitle}</h3>
            <h4 className="post-summary post-summary-item">By {author && author.username}</h4>
            <h4 className="post-summary post-summary-item">{dateCreated.getFullYear()}-{getNumber(dateCreated.getMonth() + 1)}-{getNumber(dateCreated.getDate())}</h4>
            <p className="post-summary-desc">{content}</p>

            <button onClick={handleLike}>Like</button>
            <button onClick={handleDislike}>Dislike</button>

            <AllComments id={post._id} />
            <CommentForm id={post._id} />
        </div>
    )
}

export default PostSummary;