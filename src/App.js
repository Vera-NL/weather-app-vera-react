import React from "react";
import Search from "./Search";
import Row1 from "./Row1";
import Row2 from "./Row2";
import Row3 from "./Row3";
import Footer from "./Footer";
import axios from "./axios";

import "./App.css";

export default function App() {
  return (
    <div className="container-fluid">
      <div className="app shadow-lg" id="app">
        <Search />
        <Row1 />
        <Row2 />
        <Row3 />
        <Footer />
      </div>
    </div>
  );
}