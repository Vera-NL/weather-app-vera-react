import React from "react";

export default function CurrentTemperature (props) {

    function showFahrenheit (event) {
        event.preventDefault();
        props.setUnit("fahrenheit");
    }

    function showCelcius (event) {
        event.preventDefault(); 
        props.setUnit("celcius");
    }

    function fahrenheit() {
        return (props.celcius * 9) / 5 + 32;
    }

    if (props.unit === "celcius") {
    return ( 
        <div className="CurrentTemperature">
            <span className="Temperature">{Math.round(props.celcius)}</span>
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
    return (
        <div className="CurrentTemperature">
            <span className="Temperature">{Math.round(fahrenheit())}</span>
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