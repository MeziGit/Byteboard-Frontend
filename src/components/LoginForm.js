import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import { LoggedInContext } from "./App";
import "./App.css"


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

            const response = await fetch("http://localhost:1339/session/login",requestOptions)

            if(response.status === 200)
            {
                alert("Thanks for logging in")
                setIsLoggedIn(true)
                navigate("/home")
            }
            else
            {
                setIsLoggedIn(false)
                let result = await response.json()
                alert(result.errorMessage)

            }
        }
        catch(error)
        {
            alert(error.message)
        }
}



return(
    <form onSubmit={handleSubmit} className="login">
        <label htmlFor="username">Username</label>
        <input type="text" name="username" placeholder="Username..." onChange={(e)=>setUsername(e.target.value) }/>
<br/>
        <label htmlFor="password">Password</label>
        <input type="password" name="password" placeholder="Password..." onChange={(e)=>setPassword(e.target.value) }/>


        <br/><br/>
        {username && password && <button type="submit" class="btn btn-success">Submit</button>}
        <br/><br/>
    </form>
)
}

export {LoginForm}