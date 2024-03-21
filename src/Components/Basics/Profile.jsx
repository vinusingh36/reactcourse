import { logDOM } from "@testing-library/react";

const Profile = ({ img, name, gender }) => {
    let cardStyle = {
        margin: "20px auto",
        width: "350px",
        height: "400px",
        textAlign: 'center',
        boxShadow: "0 0 10px black"
    }
    return (
        <div style={cardStyle}>
            <h2>Profile Component</h2>
            <div >
                <img src={img} alt="vineet singh" width="300" height="200" />
                <h3>{name}</h3>
                <p>{gender}</p>
            </div>
        </div>
    )
}

export default Profile;