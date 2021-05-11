import React, {useState} from "react";
import axios from "axios";
import ForecastDays from "./ForecastDays";
import ForecastHours from "./ForecastHours"

import "./Weather.css";

export default function Weather() {
  let [weatherData, setWeatherData] =  useState({ready: false});
  let [city, setCity] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
}

  function showWeather(response) {
    setWeatherData({
      date: "Friday 13:57",
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      monthYear: "16 April 2021",
      ready: true,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed     
    })
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

if (weatherData.ready) {
  return (
    <div className= "Weather">

    <form className="search" id="search-form" onSubmit={handleSubmit}>
      <div className="input-group">
        <input
          className="form-control"
          type="search"
          placeholder="Search a city..."
          aria-label="Recipient's city with two button addons"
          autocomplete="off"
          autofocus="off"
          id="search-city"
          onChange={updateCity} 
        />
        <button
          className="btn btn-outline-secondary"
          type="submit"
          value="search"
          autofocus="off"
          id="submit-city"
        >
          <i className="fas fa-search-location"></i>
        </button>
        <button
          className="btn btn-outline-secondary"
          type="button"
          value="Location"
          autofocus="off"
          id="current-location-button"
        >
          <i className="fas fa-map-marker-alt"></i>
        </button>
      </div>

      <div className="row first-row">
        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
          <h1 id="city">{city}</h1>
          <ul>
            <li id="date-update">
              Last updated on <span id="today" class="today">
                {weatherData.date}
              </span>
            </li>
            <li id="month-year">{weatherData.monthYear}</li>
          </ul>
        </div>

        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
          <div className="clearfix weather-temperature">
            <div className="float-left">
              <span id="temperature">{Math.round(weatherData.temperature)}</span>
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

      <div className="row second-row">
        <div
          className="col-xs-4 col-sm-4 col-md-4 col-lg-4"
          id="forecast-days"
        ><ForecastDays />
        </div>

        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
          <div id="current-weather-icon"><i class="fas fa-sun fa-7x"></i></div>
        </div>

        <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
          <ul id="weather-description">
            <li className="humidity">
              <strong>Humidity: </strong>
              <span id="humidity">{weatherData.humidity}</span>
              <span id="percentage"> %</span>
            </li>
            <li className="wind">
              <strong>Wind: </strong>
              <span id="wind">{Math.round(weatherData.wind)}</span>
              <span id="km/h"> km/h</span>
            </li>
            <li className="description" id="description">
              {weatherData.description}
            </li>
          </ul>
        </div>
      </div>

      <div className="row third-row" id="forecast-hours">
      <ForecastHours />
      </div>

    </form>
    </div>
);
} else {
  const apiKey = "ad1c3c6d8734a6f724e8c027e1f76c71";
  let city = "New York";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showWeather);
  return "Loading...";
}
  } 
