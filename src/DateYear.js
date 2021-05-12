import React from "react";

export default function DateYear ({input}) {
    let months = ["January", "February", "March", "April", "May", "June", "July", "Augustus", "September", "October", "November", "December"]
    let month = months[input.getMonth()];
    let year = input.getFullYear();
    let date = input.getDate();
return (
<div id="month-year">{date} {month} {year}</div>);
}