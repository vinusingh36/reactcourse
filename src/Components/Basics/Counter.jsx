import { useState } from "react";

let cardStyle = {
    width: '300px',
    padding: '50px',
    margin: '25px auto',
    boxShadow: '0 0 10px black'
}

const Counter = () => {

    const [count, setCount] = useState(0);

    let incCount = () => {
        // setCount((pendingState) => pendingState + 1);
        // setCount((pendingState) => pendingState + 1);
        // setCount((pendingState) => pendingState + 1);
        setCount(1);
    }

    return (
        <div style={cardStyle}>
            <h1>Counter App</h1>
            <h3> increased Count Value is : {count}</h3>
            <button onClick={incCount}  >Inc Count</button>&nbsp;&nbsp;&nbsp;&nbsp;

        </div>
    )
}


export default Counter;