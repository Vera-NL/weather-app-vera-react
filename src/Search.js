import React, {useState} from "react";
import axios from "axios";

import "./Search.css";

export default function Search() {
  let [city, setCity] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "ad1c3c6d8734a6f724e8c027e1f76c71";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl);}

  function updateCity(event) {
    setCity(event.target.value);
  }

  return (
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
    </form>
  );
}