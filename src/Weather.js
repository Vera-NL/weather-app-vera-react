import React, {useState} from "react";
import axios from "axios";
import Loader from "react-loader-spinner";
import WeatherInfo from "./WeatherInfo";
import "./Weather.css";
// https://ferg-weather-react.netlify.app/

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
      coord: response.data.coord,
      dayTime: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
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

function showLocation(position) {
  let lon = position.coords.longitude;
  let lat = position.coords.latitude;
  let apiKey = "ad1c3c6d8734a6f724e8c027e1f76c71";

  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showWeather);
}

  function updateLocation(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(showLocation);
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
          onClick={updateLocation} 
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
