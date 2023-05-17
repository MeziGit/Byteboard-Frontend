import { DisplayUser } from "./DisplayUser"
import { useNavigate } from "react-router-dom"


function ListUsers({users})
{
const navigate = useNavigate()
try{
    return(
        <div>

            <ul>

                {users.map((user) =>(
                    <li key={user._id}>
                        <DisplayUser user={user}/>

                    </li>
                ))}
            </ul>
        </div>
    )
                }
                catch(error)
                {
                    navigate("/usererror", { state: { errorMessage: "ERROR: No users in the database" } })
                }
}

export {ListUsers}