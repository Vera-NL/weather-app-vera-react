import React from "react";
import Search from "./Search";
import Row1 from "./Row1";
import Row2 from "./Row2";
import Row3 from "./Row3";


import "./App.css";

export default function App() {
  return (
    <div className="container-fluid">
      <div className="app shadow-lg" id="app">
        <Search />
        <Row1 />
        <Row2 />
        <Row3 />
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