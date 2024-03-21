import { useState, useRef } from "react";


const Client = ({ userData, setClientdata }) => {
    const [text, setText] = useState("");
    const ref = useRef("");
    return (
        <div>
            <h2>Client Interface</h2>
            <input type="text" placeholder="Start Chat" ref={ref} onChange={(e) => setText(e.target.value)} />&emsp;
            <button onClick={() => {
                ref.current.value = "";
                setClientdata(text)
            }} >Send</button>
            <h4>{userData}</h4>
        </div>
    )
}

export default Client;