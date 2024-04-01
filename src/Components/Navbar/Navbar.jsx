import { useContext } from "react";
import { AuthContext } from "../Context/Auth";
import { Link, useNavigate } from "react-router-dom";

let aStyle = {
    textDecoration: "none",
    margin: "1.5rem"
}

let routesData = [
    {
        path: "/profile",
        title: "Profile"
    },
    {
        path: "/product",
        title: "Products"
    },
    {
        path: "/help",
        title: "Help"
    }
]

const Navbar = () => {

    const { loggedIn, setIsloggedin } = useContext(AuthContext);
    let Navigate = useNavigate();
    return (
        <div style={{
            display: "flex",

        }} >
            <div style={{
                width: "50%",
                textAlign: "center",
                marginTop: "20px"
            }}>
                <Link style={{ textDecoration: "none", marginRight: "10%" }} to="/">Home</Link>&emsp;&emsp;
            </div>
            <div style={{
                width: "50%",
                margin: "0 0 0 20%"
            }} >
                {
                    routesData.map((route, i) => {
                        return (
                            <Link to={route.path} style={aStyle} key={i} >{route.title}</Link>
                        )
                    })
                }
                <Link to="/login">
                    <button onClick={() => {
                        setIsloggedin(false)

                    }} style={{ textDecoration: "none", margin: "1.5rem" }} >{loggedIn ? "Logout" : "Login"}</button>
                </Link>
            </div>
        </div>
    )
}

export default Navbar;