import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { AllComments } from "./AllComments";
import { CommentForm } from "./CommentForm";
import { ListTopics } from "./ListTopics";

const MAX_CONTENT_LENGTH = 300;

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


function PostSummary({ post, deletePost, updatePost }) {
    const [author, setAuthor] = useState(null);
    const dateCreated = new Date(post.dateCreated);
    const content = post.postContent.length > MAX_CONTENT_LENGTH ? post.postContent.substring(0, MAX_CONTENT_LENGTH) + "..." : post.postContent;

    const getNumber = function (num) {
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
    useEffect(() => {
        getAuthor();
    }, [])


    /**
     * Handles the like click event
     * @param {Event} event the like click event
     */
    const handleLike = async (event) => {
        event.preventDefault()

        await handleVote(post._id, 1)
    }

    /**
     * Handles the dislike click event
     * @param {Event} event the dislike click event
     */
    const handleDislike = async (event) => {
        event.preventDefault()

        await handleVote(post._id, -1)
    }


    const handleDelete = async (event) => {
        try {


            event.preventDefault()

            const requestOptions = {
                method: "DELETE",
                credentials: "include",
                body: JSON.stringify({
                    postId: post._id

                }),
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            }

            const response = await fetch("http://localhost:1339/posts", requestOptions)

            if (response.status === 200) {
                alert("Post deleted")

            }
            else {

                let result = await response.json()
                alert(result.errorMessage)

            }
        }
        catch (error) {
            alert(error.message)
        }
    }


    const [titleUpdate, setTitleUpdate] = useState(null)
    const [contentUpdate, setContentUpdate] = useState(null)


    const handleTitle = async (event) => {
        try {


            event.preventDefault()

            const requestOptions = {
                method: "PUT",
                credentials: "include",
                body: JSON.stringify({
                    postId: post._id,
                    postTitle: titleUpdate
                }),
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            }

            const response = await fetch("http://localhost:1339/posts", requestOptions)

            if (response.status === 200) {
                alert("Title updated")

            }
            else {

                let result = await response.json()
                alert(result.errorMessage)

            }
        }
        catch (error) {
            alert(error.message)
        }


    }

    const handleContent = async (event) => {
        try {


            event.preventDefault()

            const requestOptions = {
                method: "PUT",
                credentials: "include",
                body: JSON.stringify({
                    postId: post._id,
                    postContent: contentUpdate
                }),
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            }

            const response = await fetch("http://localhost:1339/posts", requestOptions)

            if (response.status === 200) {
                alert("Content updated")

            }
            else {

                let result = await response.json()
                alert(result.errorMessage)

            }
        }
        catch (error) {
            alert(error.message)
        }


    }

    return (
        <div className="post-summary-container">
            <ListTopics topics={post.topics} />
            <h3 className="post-summary">{post.postTitle}</h3>
            <h4 className="post-summary post-summary-item">By {author && author.username}</h4>
            <h4 className="post-summary post-summary-item">{dateCreated.getFullYear()}-{getNumber(dateCreated.getMonth() + 1)}-{getNumber(dateCreated.getDate())}</h4>
            <p className="post-summary-desc">{content}</p>


            <AllComments id={post._id} />

            <button type="button" class="btn btn-outline-success" onClick={handleLike}>Like</button>
            <button type="button" class="btn btn-danger" onClick={handleDislike}>Dislike</button>

            <br /><br />
            <CommentForm id={post._id} />


            <br />
            {updatePost && <label htmlFor="titleUpdate">Update Title:   </label>}
            <br />
            {updatePost && <input type="text" name="titleUpdate" placeholder="New Title..." onChange={(e) => setTitleUpdate(e.target.value)} />}

            <br /><br />
            {titleUpdate && <button type="button" class="btn btn-info" onClick={handleTitle}>Update</button>}
            <br />
            {updatePost && <label htmlFor="contentUpdate">Update Content:   </label>}
            <br />
            {updatePost && <input type="text" name="contentUpdate" placeholder="New Content..." onChange={(e) => setContentUpdate(e.target.value)} />}
            <br /><br />
            {contentUpdate && <button type="button" onClick={handleContent} class="btn btn-info">Update</button>}

            <br /><br />
            {deletePost && <button type="button" class="btn btn-warning" onClick={handleDelete}>Delete Post</button>}
        </div>
    )
}

export default PostSummary;