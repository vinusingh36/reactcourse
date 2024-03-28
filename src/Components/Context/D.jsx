import { useContext, useRef, useState } from "react";
import { myContext } from "./Context";



const D = () => {

    let data = useContext(myContext);

    return (
        <div>
            <h2>D Component</h2>
            <p>{data}</p>

        </div>
    )
}

export default D;