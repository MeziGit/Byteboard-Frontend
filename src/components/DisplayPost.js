import Card from "./Card"
import './App.css'
import { useNavigate } from "react-router-dom"
import { Home } from "./Home"


function DisplayPost(props) {

    const navigate = useNavigate()
   
    return (

        <>

            {/* Display the post */}

            <Card 
                children={
                    <>
<a>
    
                       {props.heading}
                        {props.post.postTitle && <h1>Title: {props.post.postTitle}</h1>}
                        {props.post.postContent && <h1>Content {props.post.postContent}</h1>}

                        </a>
                    </>
                }

            />

        </>
    )
}

export { DisplayPost }