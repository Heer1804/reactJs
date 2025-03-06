import React, { useEffect, useRef, useState } from 'react';

const Clock = () => {
    const [time, setTime] = useState(new Date());
    const intervalRef = useRef();

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setTime(new Date());
        }, 1000);
        return () => clearInterval(intervalRef.current);
    }, []);

    const formatTime = (date) => {
        let hours = date.getHours();
        const min = date.getMinutes().toString().padStart(2, "0");
        const sec = date.getSeconds().toString().padStart(2, "0");
        const amPm = hours >= 12 ? "PM" : "AM";

        return `${hours % 12 || 12} : ${min} : ${sec} ${amPm}`;
    };

    const formatDate = (date) => {
        return date.toLocaleDateString("en-US", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
        });
    };

    const setGreeting = (hours) => {
        if (hours < 12) return "Good Morning";
        if (hours < 16) return "Good Afternoon";
        if (hours < 19) return "Good Evening";
        return "Good Night";
    };

    return (
        <div style={{
            textAlign: "center", 
            fontFamily: "Arial, sans-serif", 
            padding: "20px", 
            backgroundColor: "rgb(13 21 37)", 
            color: "white", 
            borderRadius: "10px", 
            width: "300px", 
            margin: "20px auto",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.41)"
        }}>
            <h2 style={{ marginBottom: "10px" }}>{setGreeting(time.getHours())}</h2>
            <h1 style={{ fontSize: "2rem", marginBottom: "10px" }}>{formatTime(time)}</h1>
            <p style={{ fontSize: "1.2rem" }}>{formatDate(time)}</p>
        </div>
    );
};

export default Clock;
