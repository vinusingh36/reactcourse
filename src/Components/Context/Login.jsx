import { useContext, useEffect, useState } from "react";
import { AuthContext } from "./Auth";
import { Link, useNavigate } from "react-router-dom";

const Login = ({ login }) => {
    const [user, setUser] = useState({
        name: "",
        pass: ""
    });

    const { setIsloggedin } = useContext(AuthContext);
    const Navigate = useNavigate();


    useEffect(() => {
        console.log(process.env.REACT_APP_USERNAME);
    }, [])

    const handleAuth = (e) => {
        e.preventDefault();
        if (user.name === process.env.REACT_APP_USERNAME && user.pass === process.env.REACT_APP_PASSWORD) {
            setIsloggedin(true);
            Navigate("/")
        }
        else {
            alert("Please enter correct Credentials");
        }

    }
    return (
        <div style={{
            textAlign: "center"
        }}>
            <h2 >Login Component</h2>
            <form action="" onSubmit={handleAuth}>
                <input type="text" name="" id="" placeholder="Name" onChange={(e) =>
                    setUser({
                        ...user,
                        name: e.target.value
                    })
                } />
                <br />
                <br />
                <input type="text" placeholder="Password" onChange={(e) => setUser({
                    ...user,
                    pass: e.target.value
                })} />
                <br />
                <br />

                <input type="submit" name="" id="" value="Login" />

            </form>
        </div>
    )
}

export default Login;