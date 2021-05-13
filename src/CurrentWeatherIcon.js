import React from "react";
import WeatherIcons from "react-weathericons";

export default function CurrentWeatherIcon ({icon}) {
    let codeMapping = {
        "01d": "sun",
        "02d": "cloud-sun",
        "03d": "cloud",
        "04d": "cloud",
        "04n": "cloud-sun",
        "09d": "cloud-rain",
        "10d": "cloud-rain",
        "11d": "bolt",
        "13d": "snowflake",
        "50d": "smog",
    };
    return (<WeatherIcons
    name={codeMapping[icon]} size="7x"/>
    );
}