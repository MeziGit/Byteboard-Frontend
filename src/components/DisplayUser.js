import Card from "./Card"
import './App.css'


function DisplayUser(props) {
    const user = props.user;

    return (

        <>

            {/* Display the user */}

            <Card 
                image={props.user.profilePicture}
                children={
                    <>
                        {props.heading}
                        {props.user.username && <h1>Name: {props.user.username}</h1>}
                        {props.user.email && <h1>Email {props.user.email}</h1>}
                    </>
                }

            />

        </>
    )
}

export { DisplayUser }