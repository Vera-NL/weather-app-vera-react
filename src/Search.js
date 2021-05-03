import React from "react";

import "./Search.css";

export default function Search() {
  return (
    <form className="search" id="search-form">
      <div className="input-group">
        <input
          className="form-control"
          type="search"
          placeholder="Search a city..."
          aria-label="Recipient's city with two button addons"
          autocomplete="off"
          autofocus="off"
          id="search-city"
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
