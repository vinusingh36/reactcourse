import { useState } from "react";

const Tech = () => {
    const [img, setImg] = useState('https://miro.medium.com/v2/resize:fit:1200/1*y6C4nSvy2Woe0m7bWEn4BA.png')


    let handleAngularClick = () => {
        setImg('https://angular.io/assets/images/logos/angular/shield-large.svg')
    }
    let handleReactClick = () => {
        setImg('https://miro.medium.com/v2/resize:fit:1200/1*y6C4nSvy2Woe0m7bWEn4BA.png');
    }

    return (
        <div>
            <h2>Tech App</h2>
            <img src={img} alt="" width={300} height={250} />
            <br />
            <button onClick={handleReactClick} >React</button>&emsp;&ensp;
            <button onClick={handleAngularClick} >Angular</button>
        </div>
    )
}

export default Tech;