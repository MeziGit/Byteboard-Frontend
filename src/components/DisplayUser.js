import Card from "./Card"
import './App.css'

function DisplayUser(props) {


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
                        {props.user.email && <h3>{props.user.email}</h3>}
                        </a>


                    </>
                }

            />

        </>
    )
}

export { DisplayUser }