import { useEffect, useState } from "react";


const Title = () => {

    const [title, setTitle] = useState("Title - 1");
    const [localData, setLocaldata] = useState("");

    useEffect(() => {
        setLocaldata(localStorage.getItem("name"));
    })

    return (
        <div>
            <h2>{title}</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam qui vel accusamus ad praesentium repellendus non accusantium? Fugit harum quae ullam minima adipisci consequuntur nisi aliquid, aliquam, ab ad atque.</p>
            <p>{localData}</p>
            <button onClick={() => {
                setTitle("New Title Updated")
                if (title === "New Title Updated")
                    setTitle("Title - 1")
            }} >Change Title</button>
        </div>
    )
}

export default Title;