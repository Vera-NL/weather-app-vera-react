import React from "react";


export default function DayTime (props) {
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let day = days[props.input.getDay()];
    
    let hours = props.input.getHours();
    if (hours < 10) {hours = `0${hours}`}

    let minutes = props.input.getMinutes();
    if (minutes < 10) {hours = `0${minutes}`}
return (
<div id="today">Last updated on {day} {hours}:{minutes}</div>);
}