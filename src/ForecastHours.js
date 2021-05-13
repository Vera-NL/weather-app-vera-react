import React from "react";
import WeatherIcon from "./WeatherIcon"

export default function ForecastHours() {
    return (
            <div classname="ForecastHours">
                <div className="row">
                    <div className="col-sm-2">
                        <div className="HourlyForecast">17.00</div>
                        <WeatherIcon icon="01d" size={50} animate={false} />
                        <div className="ForecastHoursTemperature">
                            <span className="MaxTempHours">9°</span> <span className="MinTempHours">4°</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }