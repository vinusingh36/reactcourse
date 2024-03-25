import { useRef, useState } from "react";


const Timer = () => {

    const [timer, setTimer] = useState(0);
    //const [timerid, setTimerid] = useState(0);
    let myRef = useRef(null);


    let startTimer = () => {
        myRef.current = (
            setInterval(() => {
                setTimer((timer) => timer + 1);
            }, 1000)
        )
    }

    let stopTimer = () => {
        clearInterval(myRef.current);
    }

    return (
        <div style={{
            width: "400px",
            height: "300px",
            margin: "40px auto",
            boxShadow: "0 0 10px orangered"
        }}>
            <h2>Timer App</h2>
            <h4>{timer}</h4>
            <button onClick={startTimer}>Start</button>&emsp;
            <button onClick={stopTimer} >Stop</button>&emsp;
            <button onClick={() => setTimer(0)} >Reset</button>
        </div>
    )
}

export default Timer;