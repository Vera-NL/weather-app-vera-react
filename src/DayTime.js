import React from "react";

export default function DayTime ({input}) {
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let day = days[input.getDay()];
    
    let hours = input.getHours();
    if (hours < 10) {hours = `0${hours}`}

    let minutes = input.getMinutes();
    if (minutes < 10) {hours = `0${minutes}`}
return (
<div>{day} {hours}:{minutes}</div>);
}