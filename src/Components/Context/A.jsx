import { useState } from "react";
import B from "./B";
import { myContext } from "./Context";


const A = () => {
    const [state, setState] = useState("Vineet Context Provider");
    return (
        <div>
            <h2>A Component</h2>
            <myContext.Provider value={state} >
                <B />
            </myContext.Provider>
        </div>
    )
}

export default A;