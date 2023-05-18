import { DisplayComment } from "./CommentForm"
import { DisplayPost } from "./DisplayPost"
import { DisplayUser } from "./DisplayUser"
import { useNavigate } from "react-router-dom"


function ListCommentsPost({comments})
{
const navigate = useNavigate()
try{



for(let i =0;i<comments.length;i++)
{
if(comments[i] == null)
{
    comments.splice(1,i)
}
}

    return(
        <div>

<ul>
                {comments.map((comment) =>(
                   
                
                   
                    <h2>{comment.content}</h2>
                    
                   

              
                ))}
                </ul>
            
        </div>
    )
                }
                catch(error)
                {
                   
                    navigate("/usererror", { state: { errorMessage: error.message} })
                }
}


export {ListCommentsPost}