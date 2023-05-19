import { useState,useEffect } from "react"

/**
 * Displays the newly created comment
 * @param {string} id The id of the user
 * @param {string} comment The comment
 * @returns The user and the comment
 */
function DisplayComment({commentId})
{
    const [comment, setComment] = useState(null);
    const [author, setAuthor] = useState(null);

    const getAuthor = async function(currentComment) {
        const requestOptions = {
            method: "GET",
            credentials: "include",
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        }

        let response;
        try {
            response = await fetch(process.env.REACT_APP_PUBLIC_URL + "/users/ids/" + currentComment.authorId, requestOptions);
            
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

                getAuthor(real);
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
                <h2>{author && author.username}</h2>
                <h3>{comment.content}</h3>
            </>}
        </div>
    )
}

export default DisplayComment;