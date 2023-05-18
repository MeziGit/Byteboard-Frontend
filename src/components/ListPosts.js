import { DisplayPost } from "./DisplayPost"
import { DisplayUser } from "./DisplayUser"
import { useNavigate } from "react-router-dom"


function ListPosts({posts})
{
const navigate = useNavigate()
try{

    return(
        <div>


                {posts.map((post) =>(
                   
                
                    <DisplayPost post={post}/>
                   

              
                ))}
            
        </div>
    )
                }
                catch(error)
                {
                   
                    navigate("/usererror", { state: { errorMessage: error.message} })
                }
}

export {ListPosts}