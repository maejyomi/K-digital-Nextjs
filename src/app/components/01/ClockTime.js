"use client"
import { useState, useEffect } from "react";

const ClockTime = () => {
    const [dt, setDt] = useState(new Date().toLocaleTimeString()); 
   
    useEffect(() => {
        const t = setInterval(() => {
            setDt(new Date().toLocaleTimeString()); 
        },  1000)

        return () =>{clearInterval(t)};
    }, []);

    
    useEffect(() => {
        console.log(dt);
    },[dt]);

    return (
        <>
            <p>
                Next JS : Hello React !!
            </p>
            <div>
                현재시간 : {dt}
            </div>
        </>
    );
}

export default ClockTime;