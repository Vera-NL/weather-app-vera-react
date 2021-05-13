import React from "react";
import WeatherIcon from "./WeatherIcon"

export default function ForecastDays() {
    return (<div classname="ForecastDays">
                <div className="DailyForecast">Wed</div> <WeatherIcon icon="10d" size={20} animate={false} /> <br />
                <div className="ForecastDaysTemperature">
                    <span className="MaxTempDays">15°</span> <span className="MinTempDays">7°</span>
                </div>
            </div>
    );
}