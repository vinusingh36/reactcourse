import { useContext } from "react";
import { AuthContext } from "../Context/Auth";
import { Navigate } from "react-router-dom";


const Protected = ({ children }) => {

    const { loggedIn } = useContext(AuthContext)
    if (loggedIn) { return children; }
    else { return <Navigate to="/" /> }
}

export default Protected;