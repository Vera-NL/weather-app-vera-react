import React, {useState} from "react";

export default function CurrentTemperature ({celcius}) {
    let [temperature, setTemperature] = useState("celcius");

    function showFahrenheit (event) {
        event.preventDefault();
        setTemperature("fahrenheit");
    }

    function showCelcius (event) {
        event.preventDefault(); 
        setTemperature("celcius");
    }

    if (temperature === "celcius") {
    return ( 
        <div className="CurrentTemperature">
            <span className="Temperature">{Math.round(celcius)}</span>
            <span className="Units">
            <a
                className="btn btn-outline-secondary active"
                href="/"
                id="celcius-link"
                role="button"
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
        </div>);
        } else {
            let temp = (celcius * 9) / 5 + 32;
    return (
        <div className="CurrentTemperature">
            <span className="Temperature">{Math.round(temp)}</span>
            <span className="Units">
            <a
                className="btn btn-outline-secondary"
                href="/"
                id="celcius-link"
                role="button"
                onClick={showCelcius}
            >
                °C
            </a>
            <a
                className="btn btn-outline-secondary active"
                href="/"
                id="fahrenheit-link"
                role="button"
            >
                °F
            </a>

            </span>
        </div>
    );
        }
}