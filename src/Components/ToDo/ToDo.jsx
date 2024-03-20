import { logDOM } from "@testing-library/react";
import { useState } from "react";


const ToDo = () => {
    const [text, setText] = useState("");
    const [toggletext, setToggleText] = useState(" Completed");

    let getvalue = (e) => {
        setText(e.target.value)
    }

    let handleClick = () => {
        let span = document.createElement("span");
        span.textContent = text;
        document.querySelector('.cmp-add').insertAdjacentElement("beforebegin", span);
    }

    let handleToggle = () => {
        setToggleText(" Not Completed")
        if (toggletext === " Not Completed")
            setToggleText(" Completed")
    }

    let handleDelete = () => {
        // setText("");
        setToggleText("");
    }


    return (
        <div >
            <h2>To Do APP</h2>
            <input type="text" onChange={getvalue}
            />&emsp;&emsp;
            <button onClick={handleClick}> Submit</button>
            <br />
            <br />
            <div style={{ textAlign: "center" }}>
                <span className="cmp-add">{toggletext}</span>&emsp;
                <button onClick={handleToggle} >Toggle</button>&emsp;
                <button onClick={handleDelete} >Delete</button>

            </div>
        </div>
    )
}

export default ToDo;