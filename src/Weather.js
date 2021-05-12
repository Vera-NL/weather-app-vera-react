import React, {useState} from "react";
import axios from "axios";
import Loader from "react-loader-spinner";
import WeatherInfo from "./WeatherInfo";
import "./Weather.css";

export default function Weather({defaultCity}) {
  let [weatherData, setWeatherData] =  useState({ready: false});
  let [city, setCity] = useState(defaultCity);


  function search () {
    const apiKey = "ad1c3c6d8734a6f724e8c027e1f76c71";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showWeather);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
}

  function showWeather(response) {
    setWeatherData({
      city: response.data.name,
      dayTime: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      monthYear: new Date(response.data.dt * 1000),
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

<WeatherInfo data={weatherData} />

    </form>
    </div>
);
} else {
search();
  return <Loader type="Oval" color="#0d8eca" width={80} height={50} />;
}
  } 
