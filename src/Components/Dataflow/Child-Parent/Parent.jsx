import { useState } from "react";
import Child from "./Child";

var parentStyle = {
    boxShadow: '0 0 10px black',
    margin: '40px 40px',
    padding: '30px'
}

const Parent = () => {
    const [state, setState] = useState('Dummy Data');
    return (
        <div style={parentStyle} >
            <h2>Parent Component</h2>
            <p>{state}</p>
            <Child setState={setState} />
        </div>
    )
}

export default Parent;
