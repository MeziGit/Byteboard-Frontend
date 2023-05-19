import Card from "./Card"
import './App.css'
import { useNavigate } from "react-router-dom"
import { Home } from "./Home"


/**
 * Displays the user's information
 * @param {Object} props
 * @returns A card with the user's information
 */
function DisplayUser(props) {

    const navigate = useNavigate()

let sendMailUrl = `mailto:“${props.user.email}”`

    return (

        <>

            {/* Display the user */}

            <Card
                link={`profile/${props.user.username}`}
                image={props.user.profilePicture}
                children={
                    <>


                        {props.heading}
                        {props.user.username && <h1>{props.user.username}</h1>}
                        <a href={sendMailUrl}>
                        {props.user.email && <h2>{props.user.email}</h2>}
                        </a>


                    </>
                }

            />

        </>
    )
}

export { DisplayUser }