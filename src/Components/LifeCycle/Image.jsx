import { useEffect, useState } from "react";


const Image = () => {
    let reactImg = "https://miro.medium.com/v2/resize:fit:2000/1*y6C4nSvy2Woe0m7bWEn4BA.png";

    let javaImg = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyjHueboCWaUxHw_fdFOdhSNj_BLSAc2scVNG9YkLZaL2q1EWD2_vahsNIKPT0Pl1ompE&usqp=CAU"

    let nodeImg = "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png"

    const [name, setName] = useState("Image Component");
    const [img, setImg] = useState(reactImg);

    useEffect(() => {
        localStorage.setItem("name", "React Application")
        return () => {
            localStorage.removeItem("name")
        }
    }, [name]);


    return (
        <div>
            <h2>{name}</h2>
            <img src={img} alt="" width={300} height={250} />
            <br />
            <button onClick={() => setImg(reactImg)} >React</button>&emsp;&nbsp;
            <button onClick={() => setImg(javaImg)} >Java</button>&emsp;&nbsp;
            <button onClick={() => setImg(nodeImg)} >Node JS</button>
            <br />
            <button onClick={() => setName("New Heading")} >Update Heading</button>
        </div>
    )
}

export default Image;