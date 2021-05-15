import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function DailyForecast ({ForecastDay}) {

    function maxTempDays() {
        let temp = Math.round(ForecastDay.temp.max);
        return `${temp}`;
    }

    function minTempDays() {
        let temp = Math.round(ForecastDay.temp.min);
        return `${temp}`;
    }

    function formatDays() {
        let date = new Date(ForecastDay.dt);
        let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        let day = days[date.getDay()];
        return day;
      }

    return (
        <div>
            <div className="DailyForecast">{formatDays()} <WeatherIcon icon={ForecastDay.weather[0].icon} size={25} animate={false} /></div>
            <div className="ForecastDaysTemperature">
                <span className="MaxTempDays">{maxTempDays()}°</span> <span className="MinTempDays">{minTempDays()}°</span>
            </div>
        </div>);
}