import { useContext } from "react";
import C from "./C";
import { myContext } from "./Context";


const B = () => {
    let info = useContext(myContext)
    return (
        <div>
            <h2>B Component</h2>
            {info}
            <C />
        </div>
    )
}

export default B;