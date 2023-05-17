import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import { LoggedInContext } from "./App";


function PostForm() {
    const [title, setTitle] = useState(null)
    const [content, setContent] = useState(null)
    const[topic,setTopic] = useState(null)

    const navigate = useNavigate()

    const handleSubmit = async (event) => {
        event.preventDefault()




        try {

            let topics = [];
 let checkboxes = document.querySelectorAll("input[type='checkbox']:checked");
 for (let i = 0 ; i < checkboxes.length; i++) {
  topics.push(checkboxes[i].value)
 }



            const requestOptions = {
                method: "POST",
                credentials: "include",
                body: JSON.stringify({
                    title:title,
                    content:content,
                    topicNames:topics

                }),
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            }

            const response = await fetch("http://localhost:1339/posts", requestOptions)

            if (response.status === 200) {
                alert("Post created")

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

        <form onSubmit={handleSubmit} title="Post">
          <h1>POST</h1>
            <div>
<input type="checkbox" id="vehicle1" value="Programming"/>
<label for="vehicle1" > Programming</label><br/>
<input type="checkbox" id="vehicle2" value="Hardware"/>
<label for="vehicle2"> Hardware</label><br/>
</div>
<br />
            <label htmlFor="title">Title: </label>
            <input type="text" name="title" placeholder="Title..." onChange={(e) => setTitle(e.target.value)} />
            <br />

            <label htmlFor="title">Content: </label>
            <input type="text" name="title" placeholder="Content..." onChange={(e) => setContent(e.target.value)} />
            <br />


            <button type="submit">Create</button>
        </form>
    )
}

export { PostForm }