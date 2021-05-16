import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function HourlyForecast (props) {

    function maxTempHours() {
        let temp = Math.round(props.data.temp_max);
        return `${temp}`;
    }

    function minTempHours() {
        let temp = Math.round(props.data.temp_min);
        return `${temp}`;
    }

    function formatHours() {
        let date = new Date(props.data.dt * 1000);
        let hours = date.getHours();
        if (hours < 10) {hours = `0${hours}`};
        let minutes = date.getMinutes();
        if (minutes < 10) {minutes = `0${minutes}`};

        return `${hours}:${minutes}`;
      }

    return (
            <div>
                <div className="HourlyForecast">{formatHours()}</div>
                <WeatherIcon icon={props.data.weather[0].icon} size={45} animate={false} />
                <div className="ForecastHoursTemperature">
                    <span className="MaxTempHours">{maxTempHours()}°</span> <span className="MinTempHours">{minTempHours()}°</span>
                </div>
            </div>
        );
}