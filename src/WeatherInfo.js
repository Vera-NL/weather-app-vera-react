import React from "react";
import DayTime from "./DayTime";
import DateYear from "./DateYear";
import ForecastDays from "./ForecastDays";
import ForecastHours from "./ForecastHours";
import WeatherIcon from "./WeatherIcon";
import CurrentTemperature from "./CurrentTemperature";

export default function WeatherInfo (props) {
    return (<div className="WeatherInfo">
      <div className="row first-row">
        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
          <h1>{props.data.city}</h1>
          <ul id="date-update">
            <li>
              <DayTime input={props.data.dayTime} />
            </li>
            <li>
              <DateYear input={props.data.monthYear} />
            </li>
          </ul>
        </div>

        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
          <div className="clearfix weather-temperature">
            <div className="float-left">
              <CurrentTemperature celcius={props.data.temperature}/>
            </div>
          </div>
        </div>
      </div>

      <div className="row second-row">
        <div
          className="col-xs-4 col-sm-4 col-md-4 col-lg-4"
          id="forecast-days"
        ><ForecastDays coord={props.data.coord} />
        </div>

        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
          <div className="WeatherIcon"><WeatherIcon icon={props.data.icon} size={170} animate={true} /></div>
        </div>

        <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
          <ul className="WeatherDescription">
            <li className="Humidity">
              <strong>Humidity: </strong>
              <span>{props.data.humidity}</span>
              <span> %</span>
            </li>
            <li className="Wind">
              <strong>Wind: </strong>
              <span>{Math.round(props.data.wind)}</span>
              <span> km/h</span>
            </li>
            <li className="Description">
              {props.data.description}
            </li>
          </ul>
        </div>
      </div>

      <div className="row third-row">
      <ForecastHours city={props.data.name} />
      </div>
      </div>
    );
}

