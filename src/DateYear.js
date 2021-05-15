import React from "react";

export default function DateYear (props) {
    let months = ["January", "February", "March", "April", "May", "June", "July", "Augustus", "September", "October", "November", "December"]
    let month = months[props.input.getMonth()];
    let year = props.input.getFullYear();
    let date = props.input.getDate();
return (
<div id="month-year">{date} {month} {year}</div>);
}