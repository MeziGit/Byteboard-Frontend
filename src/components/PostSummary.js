import React from "react";
import { useContext } from 'react';
import { useEffect } from "react";
import { useState } from "react";
import {NavLink} from "react-router-dom";
import  {LoggedInContext}  from "./App";
const MAX_CONTENT_LENGTH = 300;
const LIKE_DISLIKE_SIZE = "20px";

/**
 * Handle vote thumbs up or down
 * @param {boolean} vote The vote of the user
 * @param {string} id The id of the post
 * @returns The post and its comments
 */
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
    const [userVote, setUserVote] = useState(null);
    const [postScore, setPostScore] = useState(null);
    let currentPost = post;

    const dateCreated = new Date(currentPost.dateCreated);
    const content = currentPost.postContent.length > MAX_CONTENT_LENGTH ? currentPost.postContent.substring(0, MAX_CONTENT_LENGTH) + "..." : currentPost.postContent;


    const getNumber = function(num) {
        return num > 10 ? num.toString() : "0" + num.toString(); 
    }

    const getAuthor = async function () {
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
        catch (error) {
            alert("Error: " + error.message);
        }

    }

    const getPostScore = async function() {
        try {
            const requestOptions = {
                method: "GET",
                credentials: "include",
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            }
    
            const result = await fetch(process.env.REACT_APP_PUBLIC_URL + "/posts/ids/" + currentPost._id.toString(), requestOptions);

            if (result.status === 200) {
                const newPost = await result.json();
                setPostScore(newPost.score);
            }
        }
        catch(error) {
            console.log(error);
        }
    }

    const getUserVote = async function() {
        try {
            const requestOptions = {
                method: "GET",
                credentials: "include",
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            }
            
            const postResult = await fetch(process.env.REACT_APP_PUBLIC_URL + "/posts/ids/" + currentPost._id.toString(), requestOptions);
            const loginResult = await fetch(process.env.REACT_APP_PUBLIC_URL + "/session/getSelf", requestOptions);
            let fetchedPost;

            if (postResult.status === 200) {
                fetchedPost = await postResult.json();
            }

            if (loginResult.status === 200) {
                const user = await loginResult.json();

                if (fetchedPost.userVotes[user._id]) {
                    setUserVote(fetchedPost.userVotes[user._id]);
                }
                else
                    setUserVote(0);
                setIsLoggedIn(true);
            }
            else {
                setUserVote(0);
                setIsLoggedIn(false);
            }
        }
        catch(error) {
            console.error(error);
        }
    }
    //#endregion

    const handleVote = async function(vote) {
        try {
            if (isLoggedIn) {
                const requestOptions = {
                    method: "PUT",
                    credentials: "include",
                    body: JSON.stringify({
                        postId: currentPost._id.toString(),
                        vote: vote
                    }),
                    headers: {
                        "Content-type": "application/json; charset=UTF-8"
                    }
                }
        
                const result = await fetch(process.env.REACT_APP_PUBLIC_URL + "/posts/vote", requestOptions);
    
                if (result.status === 200) {
                    getPostScore();
                    getUserVote();
                }
                else {
                    alert(result.statusText);
                }
            }
            else
                alert("Sign up or log in to vote on posts");
        }
        catch(error) {
            console.error(error);
        }
    }

    const handleLike = async function() {
        handleVote(1);
    }
    const handleDislike = async function() {
        handleVote(-1);
    }


    useEffect(() => {
        getAuthor();
    }, [])

    
    return (
        <div className="post-summary-container">
            <h3 className="post-summary">{post.postTitle}</h3>
            <h4 className="post-summary post-summary-item">By {author && author.username}</h4>
            <h4 className="post-summary post-summary-item">{dateCreated.getFullYear()}-{getNumber(dateCreated.getMonth() + 1)}-{getNumber(dateCreated.getDate())}</h4>
            <p className="post-summary-desc">{content}</p>
        </div>
    )
}

export default PostSummary;