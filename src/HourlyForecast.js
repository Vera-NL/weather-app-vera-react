import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function HourlyForecast (props) {

    function maxTempHoursCelcius() {
        let temp = Math.round(props.data.main.temp_max);
        return `${temp}`;
    }

    function minTempHoursCelcius() {
        let temp = Math.round(props.data.main.temp_min);
        return `${temp}`;
    }

    function maxTempHoursFahrenheit() {
        let temp = Math.round((props.data.main.temp_max * 9) / 5 + 32);
        return `${temp}`;
    }

    function minTempHoursFahrenheit() {
        let temp = Math.round((props.data.main.temp_min * 9) / 5 + 32);
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

      if (props.unit === "celcius") {
    return (
            <div>
                <div className="HourlyForecast">{formatHours()}</div>
                <WeatherIcon icon={props.data.weather[0].icon} size={45} animate={true} />
                <div className="ForecastHoursTemperature">
                    <span className="MaxTempHours">{maxTempHoursCelcius()}°</span> <span className="MinTempHours">{minTempHoursCelcius()}°</span>
                </div>
            </div>);
    } else {
        return (
            <div>
                <div className="HourlyForecast">{formatHours()}</div>
                <WeatherIcon icon={props.data.weather[0].icon} size={45} animate={true} />
                <div className="ForecastHoursTemperature">
                    <span className="MaxTempHours">{maxTempHoursFahrenheit()}°</span> <span className="MinTempHours">{minTempHoursFahrenheit()}°</span>
                </div>
            </div>);
        }
    }