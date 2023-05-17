import  {LoggedInContext}  from "./App";
import NavButton from "./NavButton";
import Header from "./Header";
import { Navbar } from "react-bootstrap";
import { AllUsers } from "./AllUsers";

function Home()
{
    return(
        <div>

       <h1>Home</h1>

       <AllUsers/>
       
       </div>
    )
}

export {Home}