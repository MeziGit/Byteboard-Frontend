import Card from "./Card"
import './App.css'
import { useNavigate } from "react-router-dom"
import { Home } from "./Home"
import { CommentForm } from "./CommentForm"
import { AllComments } from "./AllComments"


async function handleVote(props, vote) {
    try {

        const requestOptions = {
            method: "PUT",
            credentials: "include",
            body: JSON.stringify({
                postId: props.post._id,
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


function DisplayPost(props) {

    const navigate = useNavigate()

    const handleLike = async (event) => {
        event.preventDefault()

        await handleVote(props, 1)
    }

    const handleDislike = async (event) => {
        event.preventDefault()

        await handleVote(props, -1)
    }


    return (

        <>

            {/* Display the post */}

            <Card height="500em" width="500em"
                children={
                    <>
                        <a>

                            {props.heading}
                            {props.post.postTitle && <h2>Title: {props.post.postTitle}</h2>}
                            {props.post.postContent && <h3>Content: <br/> {props.post.postContent}</h3>}


                            <button onClick={handleLike}>Like</button>
                            <button onClick={handleDislike}>Dislike</button>

                            <AllComments id={props.post._id} />

                            <CommentForm id={props.post._id} />
                        </a>
                    </>
                }

            />

        </>
    )
}

export { DisplayPost }