import React from "react";
import DayTime from "./DayTime";
import DateYear from "./DateYear";
import ForecastDays from "./ForecastDays";
import ForecastHours from "./ForecastHours";
import CurrentWeatherIcon from "./CurrentWeatherIcon"
import CurrentTemperature from "./CurrentTemperature"

export default function WeatherInfo ({data}) {
    return (<div className="WeatherInfo">
      <div className="row first-row">
        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
          <h1 id="city">{data.city}</h1>
          <ul id="date-update">
            <li>
              <DayTime input={data.dayTime} />
            </li>
            <li>
              <DateYear input={data.monthYear} />
            </li>
          </ul>
        </div>

        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
          <div className="clearfix weather-temperature">
            <div className="float-left">
              <CurrentTemperature celcius={Math.round(data.temperature)}/>
            </div>
          </div>
        </div>
      </div>

      <div className="row second-row">
        <div
          className="col-xs-4 col-sm-4 col-md-4 col-lg-4"
          id="forecast-days"
        ><ForecastDays />
        </div>

        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
          <div id="current-weather-icon"><CurrentWeatherIcon icon={data.icon} /></div>
        </div>

        <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
          <ul id="weather-description">
            <li className="humidity">
              <strong>Humidity: </strong>
              <span id="humidity">{data.humidity}</span>
              <span id="percentage"> %</span>
            </li>
            <li className="wind">
              <strong>Wind: </strong>
              <span id="wind">{Math.round(data.wind)}</span>
              <span id="km/h"> km/h</span>
            </li>
            <li className="description" id="description">
              {data.description}
            </li>
          </ul>
        </div>
      </div>

      <div className="row third-row" id="forecast-hours">
      <ForecastHours />
      </div>
      </div>
    );
}

