import Card from "./Card"
import './App.css'


function DisplayUser(props) {


    return (

        <>

            {/* Display the user */}

            <Card 
                image={process.env.PUBLIC_URL + "/images/" + props.user.name + ".jpg"}
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