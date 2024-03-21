import { useState } from "react";
import Child from "./Child";


var parentStyle = {
    boxShadow: '0 0 10px black',
    margin: '40px 40px',
    padding: '30px'
}

const Parent = () => {
    const [data, setData] = useState('');
    const [childData, setChilddata] = useState('')

    const handleData = () => {
        setChilddata(data);
    }
    return (
        <div style={parentStyle}>
            <h2>Parent Component</h2>
            <input type="text" placeholder="Enter Text" onChange={(e) => setData(e.target.value)} />&emsp;
            <button onClick={handleData} >Submit</button>

            <Child parentData={childData} />
        </div>
    )
}

export default Parent;