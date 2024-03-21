import { useState } from "react";
import Client from "./Client";
import User from "./User";


const Chatapp = () => {
    const [userData, setUserdata] = useState("");
    const [clientData, setClientdata] = useState("");
    return (
        <div style={{
            margin: "20px 20px",
            boxShadow: "0 0 10px black",
            padding: "10px",
            height: "250px"
        }}>
            <h2>Chat Application</h2>
            <div style={{
                display: "flex",
                height: "150px"
            }}>
                <div style={{
                    width: "50%",
                    boxShadow: "0 0 10px orangered"
                }}>
                    <User setUserdata={setUserdata} clientData={clientData} />
                </div>&emsp;&emsp;
                <div style={{
                    width: "50%",
                    boxShadow: "0 0 10px green"
                }}>
                    <Client userData={userData} setClientdata={setClientdata} />
                </div>
            </div>
        </div>
    )
}

export default Chatapp;