import { useState } from 'react';
import './User.css'
import { logDOM } from '@testing-library/react';

const User = () => {

    let userData = {
        name: "Vineet Singh",
        gender: "Male",
        email: "vinu@gmail.com",
        img: "https://img.freepik.com/free-photo/mand-holding-cup_1258-340.jpg"
    }

    const [user, setUser] = useState(userData)

    const [style, setStyle] = useState({
        bgColor: "white",
        color: "black",
        text: "Enable Dark Mode"
    });

    const changeTheme = (e) => {
        e.target.checked ? setStyle({
            bgColor: "black",
            color: "white",
            text: "Disable Dark Mode"
        }) : setStyle({
            bgColor: "white",
            color: "black",
            text: "Enable Dark Mode"
        })
    }

    const changeUser = () => {
        setUser({
            name: "Kajal",
            gender: "Female",
            email: "kajal@gmail.com",
            img: "https://img.freepik.com/premium-photo/portrait-beautiful-woman-street-with-her-arms-crossed-her-chest_668450-121.jpg"
        })
    }

    return (
        <div>
            <div>
                <h1>User Component</h1>
            </div>
            <div id="container">
                <div id='image-container'>
                    <img src={user.img} alt="" width={290} height={300} />
                </div>
                <div id='details-container' style={{ backgroundColor: style.bgColor, color: style.color }}>
                    <dl>
                        <dt><b>User Name</b></dt>
                        <dd>{user.name}</dd>
                        <dt><b>Gender</b></dt>
                        <dd>{user.gender}</dd>
                        <dt><b>Email</b></dt>
                        <dd>{user.email}</dd>
                        <dt><b>Description</b></dt>
                        <dd>Lorem ipsum dolor sit amet, consectetur adipisicing elit, odit accusamus, quod atque earum odio!</dd>
                    </dl>
                    <input type="checkbox" value="" onChange={changeTheme} />{style.text}
                </div>
            </div>
            <div>
                <button onClick={() => setUser(userData)} >vineet</button>&emsp;
                <button onClick={changeUser} >Kajal</button>
            </div>
        </div>

    )
}

export default User;