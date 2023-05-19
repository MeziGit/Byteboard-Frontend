import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import { LoggedInContext } from "./App";
import {  Button } from "react-bootstrap";

function DeleteAccountButton() {
    const [isLoggedIn, setIsLoggedIn] = useContext(LoggedInContext)
    const navigate = useNavigate()


    const performDelete = async () => {
        try {
            const requestOptions = {
                method: "GET",
                credentials: "include",
            }


            const res = await fetch("http://localhost:1339/session/getSelf",
                { method: "GET", credentials: "include" });

            if (res.status !== 200) throw new Error("User not logged in")

            const username = await res.text();

            const response = await fetch("http://localhost:1339/session/logout", requestOptions)

            const password = prompt("Please enter your current password")
let res2

            if (response.status === 200) {
                
                setIsLoggedIn(false)

                navigate("/")

                const requestOptions = {
                    method: "DELETE",
                    credentials: "include",
                    body: JSON.stringify({
                        usernameToDelete: username,
                        currentPassword: password
                    }),
                    headers: {
                        "Content-type": "application/json; charset=UTF-8"
                    }
                }

              res2 =    await fetch("http://localhost:1339/users", requestOptions)
            }


            if(res2.status==200)
            {
                alert("Sad to see you leave, leave a feedback on how we can improve our website")
            }
            else
            {
                throw new Error("Incorrect password, will log out out of this account")
            }


        }

        catch (error) {
            alert(error.message)

        }
    }



    return (
        <Button variant="primary" size="md" onClick={performDelete}>
            Delete Account
        </Button>
    )
}

export default DeleteAccountButton