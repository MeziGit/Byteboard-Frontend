import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import { LoggedInContext } from "./App";
import { Button } from "react-bootstrap";

/**
 * A logout button that expires the cookie on the server
 * @returns A button that logs the user out
 */
function LogoutButton() {
    const [isLoggedIn, setIsLoggedIn] = useContext(LoggedInContext)
    const navigate = useNavigate()


    const performLogout = async () => {
        try {
            const requestOptions = {
                method: "GET",
                credentials: "include",
            }



            const response = await fetch("http://localhost:1339/session/logout", requestOptions)

            if (response.status === 401) {
                alert("Already logged out on server. Will log out on front-end as well")
                setIsLoggedIn(false)
                return
            }
            else if (response.status === 200) {
                alert("hope you had a good session")
                setIsLoggedIn(false)

                navigate("/")
            }
            else {
                alert("Unexpected issue on server logging out. Will log out of front end anyway")
                setIsLoggedIn(false)
            }
        }

        catch (error) {
            alert("an error occured. Logging out of front-end")
            setIsLoggedIn(false)
        }
    }



    return (
        <Button variant="primary" size="md" onClick={performLogout}>
            logout
        </Button>
    )
}

export default LogoutButton