import { ListCommentsPost } from  "./ListCommentsPost"
import { useState } from "react";

function AllComments({id}) {
    const [comments,setComments] = useState([])

    const callGetAllComments = async () => {

        const response = await fetch(`http://localhost:1339/posts/comments/post_ids/${id}`,
            { method: "GET",credentials:"include" });

        const result = await response.json();

        setComments(result)
    };

    return (

        <>

            <button onClick={callGetAllComments}>See Comments</button>

            <ListCommentsPost comments={comments} />
        </>
    )
}

export {AllComments}