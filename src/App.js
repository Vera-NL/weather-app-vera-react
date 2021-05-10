import React from "react";
import Weather from "./Weather";


import "./App.css";

export default function App() {
  return (
    <div className="container-fluid">
      <div className="app shadow-lg" id="app">
        <Weather city="Amsterdam"/>
          <small>
            <a
              href="https://github.com/Vera-NL/weather-app-vera-react"
              target="blank"
              id="open-source-code"
            >
            Open-source code 
            </a> by <a href="https://www.linkedin.com/in/veraclaassens/"
              target="blank"
              id="linkedin">Vera Claassens</a>
          </small>
      </div>
    </div>
  );
}