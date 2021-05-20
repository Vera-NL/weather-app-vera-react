import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function DailyForecast (props) {

    function maxTempDaysCelcius() {
        let temp = Math.round(props.data.temp.max);
        return `${temp}`;
    }

    function minTempDaysCelcius() {
        let temp = Math.round(props.data.temp.min);
        return `${temp}`;
    }

    function maxTempDaysFahrenheit() {
        let temp = Math.round((props.data.temp.max * 9) / 5 + 32);
        return `${temp}`;
    }

    function minTempDaysFahrenheit() {
        let temp = Math.round((props.data.temp.min * 9) / 5 + 32);
        return `${temp}`;
    }

    function formatDays() {
        let date = new Date(props.data.dt * 1000);
        let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        let day = days[date.getDay()];
        return day;
      }

    if (props.unit === "celcius") {
    return (
        <div>
            <div className="DailyForecast">{formatDays()} <WeatherIcon icon={props.data.weather[0].icon} size={25} animate={true} /></div>
            <div className="ForecastDaysTemperature">
                <span className="MaxTempDays">{maxTempDaysCelcius()}°</span> <span className="MinTempDays">{minTempDaysCelcius()}°</span>
            </div>
        </div>);
    } else {
        return (
        <div>
            <div className="DailyForecast">{formatDays()} <WeatherIcon icon={props.data.weather[0].icon} size={25} animate={true} /></div>
            <div className="ForecastDaysTemperature">
                <span className="MaxTempDays">{maxTempDaysFahrenheit()}°</span> <span className="MinTempDays">{minTempDaysFahrenheit()}°</span>
            </div>
        </div>);
        }
}