import { useNavigate } from "react-router-dom"


function ListTopics({topics})
{
    const navigate = useNavigate()
    try{
    
        return(
            <div>

                    {topics.map((topic) =>(
                       
              
                        <h3>({topic.topicName})</h3>
                       
                    ))}
           
            </div>
        )
                    }
                    catch(error)
                    {
                       
                        navigate("/usererror", { state: { errorMessage: error.message} })
                    }
}


export {ListTopics}