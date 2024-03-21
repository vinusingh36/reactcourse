import { useRef, useState } from "react";


const User = ({ setUserdata, clientData }) => {
    const [text, settext] = useState("");
    const ref = useRef("");

    return (
        <div>
            <h2>User Interface</h2>
            <input type="text" placeholder="Start Chat" ref={ref} onChange={(e) => {
                settext(e.target.value)
            }} />&emsp;
            <button onClick={() => {
                ref.current.value = "";
                setUserdata(text)
            }}>Send</button>
            <h4>{clientData}</h4>
        </div>
    )
}

export default User;
