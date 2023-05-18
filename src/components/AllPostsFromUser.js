import { ListPosts } from "./ListPosts"
import { useEffect, useState } from "react"

function AllPostsFromUser(props) {

    try
    {

    
    const [posts, setPosts] = useState([])


    const callGetAllPosts = async (event) => {
        event.preventDefault()

        const response = await fetch(`http://localhost:1339/posts/users/${props.user._id}`)

        const result = await response.json();

        setPosts(result)


    }

    return (

        <>


            <button onClick={callGetAllPosts}>get posts</button>

            <ListPosts posts={posts} />
        </>
    )
    }
    catch(error)
    {
    }
}

export { AllPostsFromUser }

/*

const fetchData = () => {
    fetch(`http://localhost:1339/posts/users/${props.user._id}`,{ method: "GET", credentials: "include" })
      .then(response => {
        return response.json()
      })
      .then(data => {
       alert(data)
        setPosts(data)
      })
  }

  useEffect(() => {
    fetchData()
  }, [])
*/
//alert("name " +props.user.username + " id "+props.user._id)
 //alert(posts.postTitle)