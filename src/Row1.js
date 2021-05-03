import React from "react";
import axios from "./axios";

import "./Row1.css";

export default function Row1() {
  let cityDateTempData = {
    city: "Maastricht",
    date: "Friday 13:57",
    monthYear: "16 April 2021",
    temperature: 9
  };

  return (
    <div className="row first-row">
      <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
        <h1 id="city">{cityDateTempData.city}</h1>
        <ul>
          <li id="date-update">
            Last updated on
            <span id="today" class="today">
              {cityDateTempData.date}
            </span>
          </li>
          <li id="month-year">{cityDateTempData.monthYear}</li>
        </ul>
      </div>

      <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
        <div className="clearfix weather-temperature">
          <div className="float-left">
            <span id="temperature">{cityDateTempData.temperature}</span>
            <span className="units" id="units">
              <a
                className="btn btn-outline-secondary active"
                href="/"
                id="celsius-link"
                role="button"
              >
                °C
              </a>
              <a
                className="btn btn-outline-secondary"
                href="/"
                id="fahrenheit-link"
                role="button"
              >
                °F
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
