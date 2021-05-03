import React from "react";
import axios from "./axios";

import "./Row2.css";

export default function Row2() {
  let forecastdayIconDescriptionData = {
    humidity: 56,
    wind: 16,
    description: "Sunny"
  };

  return (
    <div className="row second-row">
      <div
        className="col-xs-4 col-sm-4 col-md-4 col-lg-4"
        id="forecast-days"
      ></div>

      <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
        <div id="current-weather-icon"></div>
      </div>

      <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
        <ul id="weather-description">
          <li className="humidity">
            <strong>Humidity:</strong>
            <span id="humidity">{forecastdayIconDescriptionData.humidity}</span>
            <span id="percentage"> %</span>
          </li>
          <li className="wind">
            <strong>Wind: </strong>
            <span id="wind">{forecastdayIconDescriptionData.wind}</span>
            <span id="km/h"> km/h</span>
          </li>
          <li className="description" id="description">
            {forecastdayIconDescriptionData.description}
          </li>
        </ul>
      </div>
    </div>
  );
}
