import Card from "./Card"
import './App.css'
import { useNavigate } from "react-router-dom"
import { Home } from "./Home"


function DisplayUser(props) {

    const navigate = useNavigate()

    return (

        <>

            {/* Display the user */}

            <Card
                image={props.user.profilePicture}
                children={
                    <>
                        <a href={`profile?${props.user.username}`} >

                            {props.heading}
                            {props.user.username && <h1>Name: {props.user.username}</h1>}
                            {props.user.email && <h1>Email {props.user.email}</h1>}

                        </a>
                    </>
                }

            />

        </>
    )
}

export { DisplayUser }