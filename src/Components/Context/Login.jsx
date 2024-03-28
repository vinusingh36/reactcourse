import { useContext, useState } from "react";
import { AuthContext } from "./Auth";

const Login = ({ login }) => {
    const [name, setName] = useState("");
    const [pass, setPass] = useState("");
    const { setIsloggedin } = useContext(AuthContext);
    const handleAuth = (e) => {
        e.preventDefault();
        if (name === "vineet" && pass === "singh") {
            setIsloggedin(false)
        }
        else {
            alert("Please enter correct Credentials")
        }

    }
    return (
        <div style={{
            textAlign: "center"
        }}>
            <h2 >Login Component</h2>
            <form action="" onSubmit={handleAuth}>
                <input type="text" name="" id="" placeholder="Name" onChange={(e) => setName(e.target.value)} />
                <br />
                <br />
                <input type="text" placeholder="Password" onChange={(e) => setPass(e.target.value)} />
                <br />
                <br />
                <input type="submit" name="" id="" value="Login" />
            </form>
        </div>
    )
}

export default Login;