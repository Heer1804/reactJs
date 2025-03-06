import React, { useRef, useState } from 'react';

function Timer() {
    const [seconds, setSeconds] = useState(0);
    const timerRef = useRef(null);

    const startTimer = () => {
        if (!timerRef.current) {
            timerRef.current = setInterval(() => {
                setSeconds((prev) => prev + 1);
            }, 1000);
        }
    };

    const stopTimer = () => {
        clearInterval(timerRef.current);
        timerRef.current = null;
    };

    const restartTimer = () => {
        stopTimer();
        setSeconds(0);
        startTimer();
    };

    return (
        <div style={{ textAlign: "center", 
            fontFamily: "Arial, sans-serif", 
            padding: "20px", 
            backgroundColor: "rgb(13 21 37)", 
            color: "white", 
            borderRadius: "10px", 
            width: "300px", 
            margin: "20px auto",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.41)" }}>
            <h1 style={{ fontSize: '2rem', marginBottom: '20px', color: 'white' }}>Time: {seconds}</h1>
            <button 
                onClick={startTimer} 
                style={{ 
                    padding: '10px 20px', 
                    margin: '5px', 
                    fontSize: '1rem', 
                    cursor: 'pointer', 
                    backgroundColor: '#28a745', 
                    color: 'white', 
                    border: 'none', 
                    borderRadius: '5px' 
                }}
            >
                Start
            </button>
            <button 
                onClick={stopTimer} 
                style={{ 
                    padding: '10px 20px', 
                    margin: '5px', 
                    fontSize: '1rem', 
                    cursor: 'pointer', 
                    backgroundColor: '#dc3545', 
                    color: 'white', 
                    border: 'none', 
                    borderRadius: '5px' 
                }}
            >
                Stop
            </button>
            <button 
                onClick={restartTimer} 
                style={{ 
                    padding: '10px 20px', 
                    margin: '5px', 
                    fontSize: '1rem', 
                    cursor: 'pointer', 
                    backgroundColor: 'rgb(255 167 7)', 
                    color: 'white', 
                    border: 'none', 
                    borderRadius: '5px' 
                }}
            >
                Restart
            </button>
        </div>
    );
}

export default Timer;