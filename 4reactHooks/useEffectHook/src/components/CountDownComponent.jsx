import React from "react";
import { useEffect, useState } from "react";

function CountDownComponent() {

    const [clockNumber, setClockNumber] = useState(0);

    useEffect(() => {
        // console.log("mount");
      const clock =  setInterval(() => {
            setClockNumber(clockNumber + 1);
        },1000);

        return function () {
            clearInterval(clock)
            // console.log("unmount");
        }
    },[clockNumber])



    return (
        <>
                <h4 className="mt-4">I am countdown component</h4>
                <p>countDown : {clockNumber}</p>

        </>
       
    )
}

export default CountDownComponent