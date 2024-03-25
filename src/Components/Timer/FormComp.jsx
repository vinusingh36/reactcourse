import { useState } from "react";


const FormComp = () => {

    const [user, setUser] = useState({
        name: "",
        password: "",
        email: "",
        gender: "",
        city: ""
    });

    const getFormData = (e) => {
        // console.log(e.target.value);
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    const logUser = (e) => {
        e.preventDefault();
        console.log(user);
    }
    return (
        <div style={{
            width: "400px",
            height: "300px",
            margin: "20px auto",
            padding: "10px",
            boxShadow: "0 0 10px orangered"
        }}>
            <h2>React Form</h2>
            <form onSubmit={logUser}>
                <div>
                    <input type="text" name="name" placeholder="Enter Name" onChange={getFormData} />
                </div>

                <div style={{
                    marginTop: "10px"
                }}>
                    <input type="password" name="password" placeholder="Enter Password" onChange={getFormData} />
                </div>
                <div style={{
                    marginTop: "10px"
                }}>
                    <input type="email" name="email" placeholder="Enter Email" onChange={getFormData} />
                </div>
                <div style={{
                    marginTop: "10px"
                }}>
                    <input type="radio" name="gender" value="male" onChange={getFormData} />Male
                    <input type="radio" name="gender" value="female" onChange={getFormData} />Female
                </div>
                <div style={{
                    marginTop: "10px"
                }}>
                    <select name="city" id="" onChange={getFormData}>
                        <option value="city">Select Your City</option>
                        <option value="delhi">Delhi</option>
                        <option value="lucknow">Lucknow</option>
                        <option value="bengluru">Bengluru</option>
                    </select>
                </div>
                <div style={{
                    marginTop: "10px"
                }}>
                    <input type="Submit" value="Register" />
                </div>
            </form>
            <div>

            </div>
        </div>
    )
}

export default FormComp;