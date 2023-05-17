import { DisplayUser } from "./DisplayUser"
import { useNavigate } from "react-router-dom"


function ListUsers({users})
{
const navigate = useNavigate()
try{
    return(
        <div>


                {users.map((user) =>(
                   
                        <DisplayUser user={user}/>

              
                ))}
            
        </div>
    )
                }
                catch(error)
                {
                    navigate("/usererror", { state: { errorMessage: "ERROR: No users in the database" } })
                }
}

export {ListUsers}