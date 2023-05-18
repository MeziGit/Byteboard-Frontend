import { useState } from "react"


function CommentForm({id}) {


    const [comment, setComment] = useState(null)

    const handleSubmit = async (event) => {
        try {
            event.preventDefault()

            const requestOptions = {
                method: "POST",
                credentials: "include",
                body: JSON.stringify({
                    content: comment,
                    postId: id
                }),
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            }


            const response = await fetch("http://localhost:1339/posts/comments", requestOptions)

            if (response.status === 200) {
                alert("Comment submitted")

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
        <form onSubmit={handleSubmit}>
            
            <input type="text" name="comment" placeholder="Add Comment..." onChange={(e) => setComment(e.target.value)} />


            {comment && <button type="submit" class="btn btn-primary" onClick={handleSubmit}>Submit</button>}
        </form>
    )
}


export { CommentForm}