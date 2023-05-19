import { NavLink, useResolvedPath, useMatch } from "react-router-dom";

/**
 * Nav button color details (header navigation bar)
 * @param {*} props pages
 * @returns navigation pages with color modification
 */
function NavButton(props) {
    let resolved = useResolvedPath(props.to)
    let match = useMatch({ path: resolved.pathname, end: true })


    const buttonStyle = {
        backgroundColor: "#61dafb",
        border: "none",
        color: "white",
        padding: "15px 32px",
        textAlign: "center",
        textDecoration: "none",
        display: "inline-block",
        fontSize: "16px",
    }

    const activeButtonStyle = {
        backgroundColor: "red",
        border: "none",
        color: "black",
        padding: "15px 32px",
        textAlign: "center",
        textDecoration: "none",
        display: "inline-block",
        fontSize: "16px",
    }

    return (
        <NavLink to={props.to}>
            <button className={`navbutton${match ? " navbutton-active" : " navbutton-inactive"}`}>
                {props.label}
            </button>
        </NavLink>
    )
}


export default NavButton