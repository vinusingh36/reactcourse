import { useContext } from "react";
import { AuthContext } from "../Context/Auth";


const Navbar = () => {

    const { loggedIn, setIsloggedin } = useContext(AuthContext);
    return (
        <div style={{
            display: "flex",

        }} >
            <div style={{
                width: "50%",
                textAlign: "center",
                marginTop: "20px"
            }}>
                <a style={{ textDecoration: "none", marginRight: "10%" }} href="">Home</a>&emsp;&emsp;
            </div>
            <div style={{
                width: "50%",
                margin: "0 0 0 20%"
            }} >
                <a style={{ textDecoration: "none", margin: "1.5rem" }} href="">Profile</a>
                <a style={{ textDecoration: "none", margin: "1.5rem" }} href="">Products</a>
                <a style={{ textDecoration: "none", margin: "1.5rem" }} href="">Help</a>
                <button onClick={() => {
                    setIsloggedin(false)
                    if (loggedIn === false)
                        setIsloggedin(true)
                }} style={{ textDecoration: "none", margin: "1.5rem" }} >{loggedIn ? "Logout" : "Login"}</button>
            </div>
        </div>
    )
}

export default Navbar;