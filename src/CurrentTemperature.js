import React from "react";

export default function CurrentTemperature ({celcius}) {
    function FahrenheitConvert(event) {
        event.preventDefault();
    }

    return ( 
    <div className="CurrentTemperature">
        <span id="temperature">{celcius}</span>
        <span className="units" id="units">
        <a
            className="btn btn-outline-secondary active"
            href="/"
            id="celsius-link"
            role="button"
        >
            °C
        </a>
        <a
            className="btn btn-outline-secondary"
            href="/"
            id="fahrenheit-link"
            role="button"
        >
            °F
        </a>
        </span>
    </div>);
}