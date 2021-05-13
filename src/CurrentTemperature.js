import React, {useState} from "react";

export default function CurrentTemperature ({celcius}) {
    let [temperature, setTemperature] = useState(celcius);

    function showFahrenheit (event) {
        event.preventDefault();
        let temp = (celcius * 9) / 5 + 32;
        setTemperature(Math.round(temp));
    }

    function showCelcius (event) {
        event.preventDefault(); 
        setTemperature(celcius);
    }

    return ( 
    <div className="CurrentTemperature">
        <span id="temperature">{temperature}</span>
        <span className="units" id="units">
        <a
            className="btn btn-outline-secondary"
            href="/"
            id="celsius-link"
            role="button"
            onClick={showCelcius}
        >
            °C
        </a>
        <a
            className="btn btn-outline-secondary"
            href="/"
            id="fahrenheit-link"
            role="button"
            onClick={showFahrenheit}
        >
            °F
        </a>
        </span>
    </div>
    );
}