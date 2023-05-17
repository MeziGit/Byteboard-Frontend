import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import { LoggedInContext } from "./App";


function LoginForm() {
    const [username, setUsername] = useState(null)
    const [password, setPassword] = useState(null)
    const [isLoggedIn, setIsLoggedIn] = useContext(LoggedInContext)
    const navigate = useNavigate()

    const handleSubmit = async (event) => {
        event.preventDefault()

        try {
            const requestOptions = {
                method: "POST",
                credentials: "include",
                body: JSON.stringify({
                    username: username,
                    password: password
                }),
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            }

            const response = await fetch(process.env.REACT_APP_BACKEND + "/session/login",requestOptions)

            if(response.status === 200)
            {
                alert("Thanks for logging in")
                setIsLoggedIn(true)
                navigate("/home")
            }
            else
            {
                setIsLoggedIn(false)
                alert("Invalid login, try agian")

            }
        }
        catch(error)
        {
            alert("an error occured try again")
        }
}



return(
    <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input type="text" name="username" placeholder="Username..." onChange={(e)=>setUsername(e.target.value) }/>
<br/>
        <label htmlFor="password">Password</label>
        <input type="password" name="password" placeholder="Password..." onChange={(e)=>setPassword(e.target.value) }/>


        <br/>
        {username && password && <button type="submit">Submit</button>}
    </form>
)
}

export {LoginForm}