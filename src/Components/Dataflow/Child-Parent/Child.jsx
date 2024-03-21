import { useState } from "react";

var childStyle = {
    boxShadow: '0 0 10px red',
    margin: '40px 40px',
    padding: '50px'
}

const Child = ({ setState }) => {
    //console.log(setState);
    const [data, setData] = useState('')
    // console.log(data);
    return (
        <div style={childStyle}>
            <h2>Child Component</h2>
            <input type="text" placeholder="enter text here" onChange={(e) => setData(e.target.value)} />&emsp;
            <button onClick={() => setState(data)}  >Submit</button>
        </div>
    )
}

export default Child;
